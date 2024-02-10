import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createUniversity,
  deleteUniversity,
  getAll,
  getOneById,
  updateUniversity,
} from "../controllers/universityController.js";

const router = express.Router();

router.post("/create", createUniversity);
router.delete("/delete/:universityId", deleteUniversity);
router.put("/update/:universityId", updateUniversity);
router.get("/get-one/:universityId", getOneById);
router.get("/get-all", getAll);

export default router;
