import mongoose from "mongoose";
import IUser from "./IUser";
import IAnswer from "./IAnswer";
import ICategory from "./ICategory";

interface IQuestion {
  _id: string;
  title: string;
  categories: mongoose.Schema.Types.ObjectId[] | ICategory[];
  body: string;
  user: mongoose.Schema.Types.ObjectId | IUser;
  upvotes: number;
  downvotes: number;
  answers: mongoose.Schema.Types.ObjectId[] | IAnswer[];
  createdAt: Date;
  updatedAt: Date;
}

export default IQuestion;
