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
exports.uploadOnCloudinary = exports.deleteFromCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
// configure environment variables
dotenv_1.default.config({ path: "./.env" });
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = (localFilePath) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("name", process.env.CLOUDINARY_API_KEY);
    try {
        if (!localFilePath)
            return null;
        // upload file on cloudinary
        const response = yield cloudinary_1.v2.uploader.upload(localFilePath, {
            folder: "nnsel-portfolio-task",
            resource_type: "auto", // jpeg, png etc
        });
        console.log("response:", response);
        return response;
    }
    catch (err) {
        console.log("uploading error", err);
        return null;
    }
    finally {
        // remove the local file
        fs_1.default.unlinkSync(localFilePath);
    }
});
exports.uploadOnCloudinary = uploadOnCloudinary;
const deleteFromCloudinary = (public_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield cloudinary_1.v2.uploader.destroy(public_id);
        return res;
    }
    catch (error) {
        // console.log("error on deleting from cloudinary:", error);
        return null;
    }
});
exports.deleteFromCloudinary = deleteFromCloudinary;
