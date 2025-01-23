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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const verifyJWT = (0, asyncHandler_1.default)((req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        console.log("req?.cookies:", req === null || req === void 0 ? void 0 : req.cookies);
        const accessToken = ((_a = req === null || req === void 0 ? void 0 : req.cookies) === null || _a === void 0 ? void 0 : _a.accessToken) ||
            ((_b = req.header("Authorization")) === null || _b === void 0 ? void 0 : _b.replace("Bearer ", ""));
        console.log("accessToken:", accessToken);
        if (!accessToken) {
            throw new ApiError_1.default(401, "Unauthorized access");
        }
        const decodedToken = jsonwebtoken_1.default.verify(accessToken, process.env.ACCESS_TOKEN_SECRET || "");
        const user = yield user_model_1.default.findById(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken._id).select("-password");
        if (!user) {
            throw new ApiError_1.default(401, "Invalid Access Token");
        }
        req.user = {
            _id: user === null || user === void 0 ? void 0 : user._id,
            username: user === null || user === void 0 ? void 0 : user.username,
            email: user === null || user === void 0 ? void 0 : user.email,
            role: user === null || user === void 0 ? void 0 : user.role,
            avatar: user === null || user === void 0 ? void 0 : user.avatar,
            tokens: {
                refreshToken: user === null || user === void 0 ? void 0 : user.refreshToken,
                accessToken: user === null || user === void 0 ? void 0 : user.accessToken,
            },
        };
        next();
    }
    catch (error) {
        console.log("error:", error);
        throw new ApiError_1.default(401, (error === null || error === void 0 ? void 0 : error.message) || "Invalid Access Token");
    }
}));
exports.default = verifyJWT;
