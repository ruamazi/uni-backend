import express from "express";
import {
  createPasword,
  deletePassword,
  login,
} from "../controllers/accessController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/add/:password", createPasword);
router.get("/delete/:password", deletePassword);
router.post("/login", login);

export default router;
