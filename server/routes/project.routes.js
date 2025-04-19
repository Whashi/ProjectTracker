import express from "express";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

const router = express.Router();

// Route to create a new project
router.post("/", createProject);

// Route to get all projects
router.get("/", getProjects);

// Route to get a single project by ID
router.get("/:id", getProjectById);

// Route to update a project by ID
router.put("/:id", updateProject);

// Route to delete a project by ID
router.delete("/:id", deleteProject);

export default router;
