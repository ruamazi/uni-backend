import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createUniversity,
  deleteUniversity,
  updateUniversity,
} from "../controllers/universityController.js";

const router = express.Router();

router.post("/create", createUniversity);
router.delete("/delete", deleteUniversity);
router.put("/update", updateUniversity);

export default router;
