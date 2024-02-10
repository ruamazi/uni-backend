import { University } from "../models/universitySchema.js";

export const createUniversity = async (req, res) => {
  const { name, location, info, phoneNumbers, websites } = req.body;
  if (
    !name ||
    !location ||
    name.trim().length === 0 ||
    location.trim().length === 0
  ) {
    return res.status(404).json({ error: "Name and location are required" });
  }
  try {
    const newUnev = new University({
      name,
      location,
      info,
      phoneNumbers,
      websites,
    });
    await newUnev.save();
    return res.status(200).json(newUnev);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

export const updateUniversity = async (req, res) => {
  const { name, location, info, phoneNumbers, websites } = req.body;
  const { universityId } = req.params;
  try {
    const universityToUpdate = await University.findByIdAndUpdate(
      universityId,
      {
        name,
        location,
        info,
        phoneNumbers,
        websites,
      },
      { new: true }
    );
    if (!universityToUpdate) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(universityToUpdate);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

export const deleteUniversity = async (req, res) => {
  const { universityId } = req.params;
  try {
    const unToDelete = await University.findById(universityId);
    if (!unToDelete) {
      return res.status(404).json({ error: "Not found" });
    }
    await University.findByIdAndDelete(universityId);
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

export const getAll = async (req, res) => {
  try {
    const all = await University.find();
    res.status(200).json(all);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};

export const getOneById = async (req, res) => {
  const { universityId } = req.params;
  try {
    const univ = await University.findById(universityId);
    if (!univ) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(univ);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Somthing went wrong" });
  }
};
