import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    description: String,
    title: String,
    dueDate: Date,
    availableUntilDate: Date,
    availableFromDate: Date,
    points: Number,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;
