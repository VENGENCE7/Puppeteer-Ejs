import mongoose from "mongoose";

const Sequence = new mongoose.Schema({
  id: { type: String },
  seqNo: { type: Number },
});

export default mongoose.model("Seq", Sequence);
