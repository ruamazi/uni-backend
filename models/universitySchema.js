import { Schema, model } from "mongoose";

const universitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    default: "",
  },
  websites: [
    {
      type: String,
    },
  ],
  phoneNumbers: [
    {
      type: String,
    },
  ],
});

export const University = model("university", universitySchema);
