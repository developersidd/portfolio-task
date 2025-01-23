"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const multer_middleware_1 = __importDefault(require("../middlewares/multer.middleware"));
const router = (0, express_1.Router)();
router.get("/:projectId", project_controller_1.getProject);
router.get("/", project_controller_1.getAllProjects);
router.patch("/:projectId", auth_middleware_1.default, project_controller_1.updateProject);
router.post("/create", auth_middleware_1.default, multer_middleware_1.default.fields([
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
]), project_controller_1.createProject);
router.delete("/:projectId", project_controller_1.deleteProject);
exports.default = router;
