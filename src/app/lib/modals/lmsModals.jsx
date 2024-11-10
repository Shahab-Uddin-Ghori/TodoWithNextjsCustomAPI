import mongoose from "mongoose";

const lmsSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    body: String,
    desc: String,
  },
  { timestamp: true }
);
const lmsModels = mongoose.models.todo || mongoose.model("todo", lmsSchema);

export default lmsModels;
