import Project from "../models/project.model.js";
import mongoose from "mongoose";

export const createProject = async (req, res) => {
  const { title, description, dueDate, toDoItems } = req.body;

  // Check if all required fields are provided
  if (!title || !description || !dueDate || !toDoItems) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const project = new Project({
    title,
    description,
    dueDate,
    toDoItems,
  });
  try {
    const newProject = await project.save();
    res.status(201).json({ success: true, data: newProject });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, toDoItems } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  try {
    const project = await Project.findByIdAndUpdate(
      id,
      { title, description, dueDate, toDoItems },
      { new: true }
    );
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
