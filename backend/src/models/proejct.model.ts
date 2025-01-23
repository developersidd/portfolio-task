import mongoose, { Schema, Document, Model } from "mongoose";

// Step 1: Define a TypeScript interface for the schema
export interface IProject extends Document {
  description: string;
  story: string;
  thumbnail: {
    public_id: string;
    url: string;
  };
  tags: string[];
  images: {
    public_id: string;
    url: string;
  }[];
  title: string;
  theme: string;
}

// Step 2: Create a Mongoose schema
const ProjectSchema: Schema = new Schema<IProject>({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  story: {
    type: String,
    required: true,
  },
  thumbnail: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  tags: {
    type: [String],
    required: true,
    default: [],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  title: {
    type: String,
    required: true,
    trim: true,
  },
  theme: {
    type: String,
    required: true,
    trim: true,
  },
});

// Step 3: Export the model
const ProjectModel: Model<IProject> = mongoose.model<IProject>("Project", ProjectSchema);

export default ProjectModel;
