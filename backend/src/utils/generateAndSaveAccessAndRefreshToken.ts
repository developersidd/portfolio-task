import { Types } from "mongoose";

import ApiError from "./ApiError";
import User from "../models/user.model";

// Define the return type for the function
interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

const generateAndSaveAccessAndRefreshToken = async (
  userId: Types.ObjectId | string
): Promise<TokenResponse> => {
  try {
    // Find user by ID
    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    // Generate access and refresh tokens
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    if (!accessToken || !refreshToken) {
      throw new ApiError(500, "Something went wrong while generating tokens");
    }

    // Save refresh token to user database
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error: any) {
    throw new ApiError(error?.statusCode || 500, error.message);
  }
};

export default generateAndSaveAccessAndRefreshToken;
