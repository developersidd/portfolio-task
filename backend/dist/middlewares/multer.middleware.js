"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/temp");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}-${Date.now()}`);
    },
});
const upload = (0, multer_1.default)({
    storage,
    fileFilter: (req, file, cb) => {
        console.log("Resolved path:", path_1.default.resolve("./public/temp"));
        if (file.mimetype === "image/png" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/jpg") {
            console.log("file.mimetype:", file.mimetype);
            cb(null, true); // accept file and upload it
        }
        else {
            cb(new Error("File format not supported")); // reject file
        }
    },
    //limits: {
    //  fileSize: 1024 * 1024 * 5, // 5MB
    //},
});
exports.default = upload;
