"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.refreshAccessToken = exports.logoutUser = exports.loginUser = exports.getCurrentUser = exports.getAllUsers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const cloudinary_1 = require("../utils/cloudinary");
const generateAndSaveAccessAndRefreshToken_1 = __importDefault(require("../utils/generateAndSaveAccessAndRefreshToken"));
const cookieOptions = {
    httpOnly: true,
    secure: true,
};
const registerUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { username, role, email, password } = req.body || {};
    if ([username, email, role, password].some((field) => (field === null || field === void 0 ? void 0 : field.trim()) === "")) {
        throw new ApiError_1.default(400, "Please provide all required fields");
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        throw new ApiError_1.default(400, "Please provide a valid email address");
    }
    const existedUser = yield user_model_1.default.findOne({ $or: [{ username }, { email }] });
    if (existedUser) {
        throw new ApiError_1.default(409, "User already exists");
    }
    const avatarLocalPath = (_a = req === null || req === void 0 ? void 0 : req.file) === null || _a === void 0 ? void 0 : _a.path;
    console.log("req?.file:", req === null || req === void 0 ? void 0 : req.file);
    console.log("avatarLocalPath:", avatarLocalPath);
    if (!avatarLocalPath) {
        throw new ApiError_1.default(400, "Avatar is required");
    }
    const avatar = yield (0, cloudinary_1.uploadOnCloudinary)(avatarLocalPath);
    if (!(avatar === null || avatar === void 0 ? void 0 : avatar.url)) {
        throw new ApiError_1.default(500, "Something went wrong while uploading Avatar Image");
    }
    const user = yield user_model_1.default.create({
        username,
        email,
        role,
        password,
        avatar: {
            public_id: avatar === null || avatar === void 0 ? void 0 : avatar.public_id,
            url: avatar === null || avatar === void 0 ? void 0 : avatar.url,
        },
    });
    const createdUser = yield user_model_1.default.findById(user === null || user === void 0 ? void 0 : user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError_1.default(500, "Something went wrong while registering user");
    }
    return res
        .status(201)
        .json(new ApiResponse_1.default(200, createdUser, "User registered successfully"));
}));
exports.registerUser = registerUser;
const loginUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body || {};
    if (!(username || email) || !password) {
        throw new ApiError_1.default(400, "Please provide all required fields");
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        throw new ApiError_1.default(400, "Please provide a valid email address");
    }
    const user = yield user_model_1.default.findOne({
        $or: [{ username }, { email }],
    });
    if (!user) {
        throw new ApiError_1.default(404, "User not found");
    }
    const isPasswordMatched = yield user.isPasswordCorrect(password);
    if (!isPasswordMatched) {
        throw new ApiError_1.default(401, "Invalid user credentials");
    }
    const { accessToken, refreshToken } = yield (0, generateAndSaveAccessAndRefreshToken_1.default)(user === null || user === void 0 ? void 0 : user._id);
    user.refreshToken = refreshToken;
    user.accessToken = accessToken;
    yield user.save({
        validateBeforeSave: false,
    });
    user.password = "";
    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(new ApiResponse_1.default(200, user, "User logged In successfully"));
}));
exports.loginUser = loginUser;
const logoutUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield user_model_1.default.findByIdAndUpdate((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id, {
        $unset: { refreshToken: 1 },
    }, {
        new: true,
    });
    return res
        .status(200)
        .clearCookie("accessToken", cookieOptions)
        .clearCookie("refreshToken", cookieOptions)
        .json(new ApiResponse_1.default(200, {}, "User logged out successfully"));
}));
exports.logoutUser = logoutUser;
const refreshAccessToken = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const incomingRefreshToken = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.refreshToken) || ((_b = req.body) === null || _b === void 0 ? void 0 : _b.refreshToken);
    if (!incomingRefreshToken) {
        throw new ApiError_1.default(401, "Unauthorized request");
    }
    const decodedToken = jsonwebtoken_1.default.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET || "");
    const user = yield user_model_1.default.findById(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken._id);
    if (!user) {
        throw new ApiError_1.default(401, "Invalid refresh token");
    }
    if ((user === null || user === void 0 ? void 0 : user.refreshToken) !== incomingRefreshToken) {
        throw new ApiError_1.default(401, "Refresh token is expired or used");
    }
    const { accessToken, refreshToken } = (yield (0, generateAndSaveAccessAndRefreshToken_1.default)(user === null || user === void 0 ? void 0 : user._id)) || {};
    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(new ApiResponse_1.default(200, { accessToken, refreshToken }, "Access Token refreshed"));
}));
exports.refreshAccessToken = refreshAccessToken;
const getCurrentUser = (0, asyncHandler_1.default)((req, res) => {
    console.log("req?.user:", req === null || req === void 0 ? void 0 : req.user);
    return res.status(200).json(new ApiResponse_1.default(200, req === null || req === void 0 ? void 0 : req.user, "User found"));
});
exports.getCurrentUser = getCurrentUser;
const getAllUsers = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find({}).select("-password");
    return res.status(200).json(new ApiResponse_1.default(200, users, "All users found"));
}));
exports.getAllUsers = getAllUsers;
