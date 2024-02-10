import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/connectDB.js";
import accessRouter from "./routes/accessRoutes.js";
import univercityRouter from "./routes/universityRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3008;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/access", accessRouter);
app.use("/api/uni", univercityRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to backend API" });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port: ${PORT}`);
});

/* {
    origin: process.env.FRONT_URL,
    credentials: true,
  } */
