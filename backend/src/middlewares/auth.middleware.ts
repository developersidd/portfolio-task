import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import ApiError from "../utils/ApiError";
import asyncHandler from "../utils/asyncHandler";

interface DecodedToken {
  _id: string;
  username: string;
  email: string;
  role: string;
}

const verifyJWT = asyncHandler(
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      console.log("req?.cookies:", req?.cookies);
      const accessToken =
        req?.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");
      console.log("accessToken:", accessToken);

      if (!accessToken) {
        throw new ApiError(401, "Unauthorized access");
      }

      const decodedToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET || ""
      ) as DecodedToken;

      const user = await User.findById(decodedToken?._id).select("-password");

      if (!user) {
        throw new ApiError(401, "Invalid Access Token");
      }

      req.user = {
        _id: user?._id,
        username: user?.username,
        email: user?.email,
        role: user?.role,
        avatar: user?.avatar,
        tokens: {
          refreshToken: user?.refreshToken,
          accessToken: user?.accessToken,
        },
      };

      next();
    } catch (error: any) {
      console.log("error:", error);
      throw new ApiError(401, error?.message || "Invalid Access Token");
    }
  }
);

export default verifyJWT;
