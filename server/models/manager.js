import mongoose from "mongoose";

const managerSchema = new mongoose.Schema({
  name: String,
  email: String,
  salary: String,
  designation: String,
  status: { type: Boolean, default: true },
  created_date: String,
  updated_date: String
});

export default mongoose.model("Manager", managerSchema);