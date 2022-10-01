import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  phno: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  token_no: { type: Number },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

export default mongoose.model("Data", DataSchema);
