import { Router } from "express";
import {
  getAllUsers,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller";
import verifyJWT from "../middlewares/auth.middleware";
import upload from "../middlewares/multer.middleware";

const router = Router();

// Register route
router.post("/register", upload.single("avatar"), registerUser);

// Login route
router.post("/login", loginUser);

// Get all users
router.get("/user-list", verifyJWT, getAllUsers);

// Logout route
router.post("/logout", verifyJWT, logoutUser);

// Refresh token route
router.post("/refresh-token", refreshAccessToken);

// Get current user
router.get("/current-user", verifyJWT, getCurrentUser);

export default router;
