import { Router } from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
} from "../controllers/project.controller";
import verifyJWT from "../middlewares/auth.middleware";
import upload from "../middlewares/multer.middleware";

const router = Router();
router.get("/:projectId", getProject);
router.get("/list", getAllProjects);
router.use(verifyJWT);
router.patch("/:projectId", updateProject);
router.post(
  "/create",
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "imageOne",
      maxCount: 1,
    },
    {
      name: "imageTwo",
      maxCount: 1,
    },
  ]),
  createProject
);
router.delete("/:projectId", deleteProject);

export default router;
