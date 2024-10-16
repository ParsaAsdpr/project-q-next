import IAnswer from "@/core/types/IAnswer";
import mongoose from "mongoose";
const { Schema } = mongoose;

export const answerSchema = new Schema<IAnswer>({
  body: {
    type: String,
    minlength: 30,
    required: true,
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

const Answer = mongoose.models.Answer || mongoose.model<IAnswer>("Answer", answerSchema);

export default Answer;
