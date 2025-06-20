import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.js"; 

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes); 



app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server running on http://localhost:${process.env.PORT}`
  );
  connectDB();
});
