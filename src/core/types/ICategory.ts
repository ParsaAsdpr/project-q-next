import mongoose from "mongoose";
import IQuestion from "./IQuestion";

interface ICategory {
  _id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  questions: mongoose.Schema.Types.ObjectId[] | IQuestion[];
  createdAt: Date;
  updatedAt: Date;
}

export default ICategory