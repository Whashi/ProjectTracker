import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import projectRoutes from "./routes/project.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
