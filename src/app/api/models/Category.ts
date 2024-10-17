import ICategory from "@/core/types/ICategory";
import mongoose from "mongoose";
const { Schema } = mongoose;

export const categoriesSchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: String,
  image: String,
  questions: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Question",
    default: [],
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

const Category =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", categoriesSchema);

export default Category;
