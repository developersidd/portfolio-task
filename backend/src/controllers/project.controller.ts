import { Request, Response } from "express";
import ProjectModel from "../models/proejct.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncHandler";
import { uploadOnCloudinary } from "../utils/cloudinary";

const createProject = asyncHandler(async (req: Request, res: Response) => {
  const { title, description, story, theme, tags } = req.body || {};
  const tagsArray = tags?.split(",").filter((tag: string) => tag.trim() !== "");
  if (
    [title, description, story, theme].some((field) => field?.trim() === "") ||
    tagsArray?.length === 0
  ) {
    throw new ApiError(400, "Please provide all required fields");
  }
  console.log("req?.files:", req?.files);
  const thumbnailLocalPath = (req?.files?.thumbnail || [])[0]?.path;
  const imageOne = (req?.files?.imageOne || [])[0]?.path;
  const imageTwo = (req?.files?.imageTwo || [])[0]?.path;
  if (!thumbnailLocalPath) {
    throw new ApiError(400, "Thumbnail is required");
  }

  if (!imageOne || !imageTwo) {
    throw new ApiError(400, "Details Images are required");
  }

  const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);
  const image1 = await uploadOnCloudinary(imageOne);
  const image2 = await uploadOnCloudinary(imageTwo);
  if (!thumbnail?.url) {
    throw new ApiError(
      500,
      "Something went wrong while uploading Thumbnail Image"
    );
  }
  if (!image1?.url || !image2?.url) {
    throw new ApiError(500, "Something went wrong while uploading Images");
  }

  const project = await ProjectModel.create({
    title,
    description,
    story,
    theme,
    tags,
    images: [
      { public_id: image1?.public_id, url: image1?.url },
      { public_id: image2?.public_id, url: image2?.url },
    ],
    thumbnail: {
      public_id: thumbnail?.public_id,
      url: thumbnail?.url,
    },
  });
  if (!project) {
    throw new ApiError(500, "Something went wrong while creating project");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, project, "Project created successfully"));
});

// get single project
const getProject = asyncHandler(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const project = await ProjectModel.findById(projectId);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  return res.status(200).json(new ApiResponse(200, project));
});

// get all projects
const getAllProjects = asyncHandler(async (req: Request, res: Response) => {
  const projects = await ProjectModel.find();
  return res
    .status(200)
    .json(new ApiResponse(200, projects, "Projects retrieved successfully"));
});

// update a project
const updateProject = asyncHandler(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const { title, description, story, theme } = req.body || {};
  console.log("b",req.body);
  console.log("theme:", theme)
  if (
    [title, description, story, theme].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "Please provide all required fields");
  }

  const project = await ProjectModel.findByIdAndUpdate(
    projectId,
    {
      title,
      description,
      story,
      theme,
    },
    { new: true }
  );
  console.log("project:", project);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, project, "Project updated successfully"));
});

// delete a project
const deleteProject = asyncHandler(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const project = await ProjectModel.findByIdAndDelete(projectId);
  console.log("project:", project);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Project deleted successfully"));
});

export {
  createProject,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
};
