import { Access } from "../models/accessSchema.js";
import jwt from "jsonwebtoken";

export const createPasword = async (req, res) => {
  const { password } = req.params;
  if (!password || password.trim().length === 0) {
    return res.status(404).json({
      error: "you cannot add empty password",
    });
  }
  if (password.length < 8 || password.length > 20) {
    return res.status(404).json({
      error:
        "password must be more than 8 characters and no more than 20 characters",
    });
  }
  try {
    const passwordExist = await Access.findOne({ password });
    if (passwordExist) {
      return res.status(404).json({ error: "Password already exist" });
    }
    const access = new Access({
      password: password,
    });
    await access.save();
    return res.status(200).json(access);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

export const deletePassword = async (req, res) => {
  const { password } = req.params;
  if (!password || password.trim().length === 0) {
    return;
  }
  try {
    const passwordToDelete = await Access.findOneAndDelete({ password });
    if (!passwordToDelete) {
      return res.status(404).json({ error: "Password not found" });
    }
    return res.json({ message: "Password removed successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

export const login = async (req, res) => {
  const { password } = req.body;
  try {
    const access = await Access.findOne({ password });
    if (!access) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const token = jwt.sign(
      {
        has_access: true,
        id: access._id,
      },
      process.env.SEC
    );
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({ message: "Login successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};
