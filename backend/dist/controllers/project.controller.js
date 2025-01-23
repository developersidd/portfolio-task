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
exports.updateProject = exports.getProject = exports.getAllProjects = exports.deleteProject = exports.createProject = void 0;
const proejct_model_1 = __importDefault(require("../models/proejct.model"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const cloudinary_1 = require("../utils/cloudinary");
const createProject = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const { title, description, story, theme, tags } = req.body || {};
    const tagsArray = tags === null || tags === void 0 ? void 0 : tags.split(",").filter((tag) => tag.trim() !== "");
    if ([title, description, story, theme].some((field) => (field === null || field === void 0 ? void 0 : field.trim()) === "") ||
        (tagsArray === null || tagsArray === void 0 ? void 0 : tagsArray.length) === 0) {
        throw new ApiError_1.default(400, "Please provide all required fields");
    }
    console.log("req?.files:", req === null || req === void 0 ? void 0 : req.files);
    const thumbnailLocalPath = (_b = (((_a = req === null || req === void 0 ? void 0 : req.files) === null || _a === void 0 ? void 0 : _a.thumbnail) || [])[0]) === null || _b === void 0 ? void 0 : _b.path;
    const imageOne = (_d = (((_c = req === null || req === void 0 ? void 0 : req.files) === null || _c === void 0 ? void 0 : _c.imageOne) || [])[0]) === null || _d === void 0 ? void 0 : _d.path;
    const imageTwo = (_f = (((_e = req === null || req === void 0 ? void 0 : req.files) === null || _e === void 0 ? void 0 : _e.imageTwo) || [])[0]) === null || _f === void 0 ? void 0 : _f.path;
    if (!thumbnailLocalPath) {
        throw new ApiError_1.default(400, "Thumbnail is required");
    }
    if (!imageOne || !imageTwo) {
        throw new ApiError_1.default(400, "Details Images are required");
    }
    const thumbnail = yield (0, cloudinary_1.uploadOnCloudinary)(thumbnailLocalPath);
    const image1 = yield (0, cloudinary_1.uploadOnCloudinary)(imageOne);
    const image2 = yield (0, cloudinary_1.uploadOnCloudinary)(imageTwo);
    if (!(thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.url)) {
        throw new ApiError_1.default(500, "Something went wrong while uploading Thumbnail Image");
    }
    if (!(image1 === null || image1 === void 0 ? void 0 : image1.url) || !(image2 === null || image2 === void 0 ? void 0 : image2.url)) {
        throw new ApiError_1.default(500, "Something went wrong while uploading Images");
    }
    const project = yield proejct_model_1.default.create({
        title,
        description,
        story,
        theme,
        tags,
        images: [
            { public_id: image1 === null || image1 === void 0 ? void 0 : image1.public_id, url: image1 === null || image1 === void 0 ? void 0 : image1.url },
            { public_id: image2 === null || image2 === void 0 ? void 0 : image2.public_id, url: image2 === null || image2 === void 0 ? void 0 : image2.url },
        ],
        thumbnail: {
            public_id: thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.public_id,
            url: thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.url,
        },
    });
    if (!project) {
        throw new ApiError_1.default(500, "Something went wrong while creating project");
    }
    return res
        .status(201)
        .json(new ApiResponse_1.default(200, project, "Project created successfully"));
}));
exports.createProject = createProject;
// get single project
const getProject = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.params;
    const project = yield proejct_model_1.default.findById(projectId);
    if (!project) {
        throw new ApiError_1.default(404, "Project not found");
    }
    return res.status(200).json(new ApiResponse_1.default(200, project));
}));
exports.getProject = getProject;
// get all projects
const getAllProjects = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield proejct_model_1.default.find();
    return res
        .status(200)
        .json(new ApiResponse_1.default(200, projects, "Projects retrieved successfully"));
}));
exports.getAllProjects = getAllProjects;
// update a project
const updateProject = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.params;
    const { title, description, story, theme } = req.body || {};
    console.log("b", req.body);
    console.log("theme:", theme);
    if ([title, description, story, theme].some((field) => (field === null || field === void 0 ? void 0 : field.trim()) === "")) {
        throw new ApiError_1.default(400, "Please provide all required fields");
    }
    const project = yield proejct_model_1.default.findByIdAndUpdate(projectId, {
        title,
        description,
        story,
        theme,
    }, { new: true });
    console.log("project:", project);
    if (!project) {
        throw new ApiError_1.default(404, "Project not found");
    }
    return res
        .status(200)
        .json(new ApiResponse_1.default(200, project, "Project updated successfully"));
}));
exports.updateProject = updateProject;
// delete a project
const deleteProject = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.params;
    const project = yield proejct_model_1.default.findByIdAndDelete(projectId);
    console.log("project:", project);
    if (!project) {
        throw new ApiError_1.default(404, "Project not found");
    }
    return res
        .status(200)
        .json(new ApiResponse_1.default(200, null, "Project deleted successfully"));
}));
exports.deleteProject = deleteProject;
