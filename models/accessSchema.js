import { Schema, model } from "mongoose";

const accessSchema = new Schema({
  password: {
    type: String,
    unique: true,
    required: true,
  },
});

export const Access = model("access", accessSchema);
