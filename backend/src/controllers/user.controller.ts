import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncHandler";
import { uploadOnCloudinary } from "../utils/cloudinary";
import generateAndSaveAccessAndRefreshToken from "../utils/generateAndSaveAccessAndRefreshToken";
const cookieOptions: Record<string, boolean> = {
  httpOnly: true,
  secure: true,
};

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, role, email, password } = req.body || {};
  if ([username, email, role, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "Please provide all required fields");
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    throw new ApiError(400, "Please provide a valid email address");
  }

  const existedUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }

  const avatarLocalPath = req?.file?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar?.url) {
    throw new ApiError(
      500,
      "Something went wrong while uploading Avatar Image"
    );
  }

  const user = await User.create({
    username,
    email,
    role,
    password,
    avatar: {
      public_id: avatar?.public_id,
      url: avatar?.url,
    },
  });

  const createdUser = await User.findById(user?._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body || {};
  if (!(username || email) || !password) {
    throw new ApiError(400, "Please provide all required fields");
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    throw new ApiError(400, "Please provide a valid email address");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordMatched = await user.isPasswordCorrect(password);
  if (!isPasswordMatched) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } =
    await generateAndSaveAccessAndRefreshToken(user?._id as string);

  user.refreshToken = refreshToken;
  await user.save({
    validateBeforeSave: false,
  });

  user.password = "";

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user, tokens: { accessToken, refreshToken } },
        "User logged In successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  await User.findByIdAndUpdate(
    req?.user?._id,
    {
      $unset: { refreshToken: 1 },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req: Request, res: Response) => {
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body?.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  const decodedToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET || ""
  ) as jwt.JwtPayload;

  const user = await User.findById(decodedToken?._id);

  if (!user) {
    throw new ApiError(401, "Invalid refresh token");
  }
  if (user?.refreshToken !== incomingRefreshToken) {
    throw new ApiError(401, "Refresh token is expired or used");
  }

  const { accessToken, refreshToken } =
    (await generateAndSaveAccessAndRefreshToken(user?._id as string)) || {};

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { accessToken, refreshToken },
        "Access Token refreshed"
      )
    );
});

const getCurrentUser = asyncHandler((req: Request, res: Response) =>
  res.status(200).json(new ApiResponse(200, req?.user, "User found"))
);

const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({}).select("-password");
  return res.status(200).json(new ApiResponse(200, users, "All users found"));
});

export {
  getAllUsers,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
};
