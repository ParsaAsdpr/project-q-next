import IQuestion from "@/core/types/IQuestion";
import mongoose from "mongoose";

const { Schema } = mongoose;
export const questionSchema = new Schema<IQuestion>({
  title: {
    type: String,
    minlength: 20,
    required: true,
  },
  categories: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Category",
    default: [],
  },
  body: {
    type: String,
    minlength: 30,
  },
  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer",
      default: [],
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Question =
  mongoose.models.Question ||
  mongoose.model<IQuestion>("Question", questionSchema);

export default Question;
