import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose, { Document, Model, Schema } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: IRequestUser;
      files?: {
        [fieldname: string]: Express.Multer.File[];
      };
      file?: Express.Multer.File;
    }
  }
}

type Avatar = {
  url: string;
  public_id: string;
};

export interface IUser extends Document {
  username: string;
  email: string;
  avatar: Avatar;
  password: string;
  role: "guest" | "admin";
  accessToken?: string;
  refreshToken?: string;
  _id: string | mongoose.Types.ObjectId;
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

export interface IRequestUser {
  _id: string | mongoose.Types.ObjectId;
  username: string;
  email: string;
  avatar: Avatar;
  role: "guest" | "admin";
  tokens: {
    accessToken?: string;
    refreshToken?: string;
  };
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // enabling searching
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        validator(v: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: "Please provide a valid email address",
      },
      trim: true,
      lowercase: true,
    },

    avatar: {
      type: {
        url: {
          type: String,
          required: [true, "Avatar URL is required"],
        },
        public_id: {
          type: String,
          required: [true, "Avatar public ID is required"],
        },
      },
      required: [true, "Avatar is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
      enum: ["guest", "admin"],
      default: "guest",
    },

    accessToken: {
      type: String,
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// Hash password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare a plain text password with the encrypted one in the database
userSchema.methods.isPasswordCorrect = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

// Create JWT token
userSchema.methods.generateAccessToken = function (): string {
  return jwt.sign(
    {
      _id: this._id,
      role: this.role,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// Create refresh token
userSchema.methods.generateRefreshToken = function (): string {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
