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
router.patch("/:projectId", updateProject);
router.use(verifyJWT);
router.get("/list", getAllProjects);
router.get("/:projectId", getProject);
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
