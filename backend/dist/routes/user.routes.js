"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const multer_middleware_1 = __importDefault(require("../middlewares/multer.middleware"));
const router = (0, express_1.Router)();
// Register route
router.post("/register", multer_middleware_1.default.single("avatar"), user_controller_1.registerUser);
// Login route
router.post("/login", user_controller_1.loginUser);
// Get all users
router.get("/list", user_controller_1.getAllUsers);
// Logout route
router.post("/logout", auth_middleware_1.default, user_controller_1.logoutUser);
// Refresh token route
router.post("/refresh-token", user_controller_1.refreshAccessToken);
// Get current user
router.get("/current-user", auth_middleware_1.default, user_controller_1.getCurrentUser);
exports.default = router;
