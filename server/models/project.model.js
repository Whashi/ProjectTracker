import mongoose from "mongoose";

const projectShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  //   status: {
  //     type: String,
  //     enum: ["Not Started", "In Progress", "Completed"],
  //     default: "Not Started",
  //   },
  toDoItems: [String],
});

const Project = mongoose.model("Project", projectShema);

export default Project;

