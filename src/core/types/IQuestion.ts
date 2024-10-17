import mongoose from "mongoose";
import IUser from "./IUser";
import IAnswer from "./IAnswer";

interface IQuestion {
  _id: string;
  title: string;
  body: string;
  user: mongoose.Schema.Types.ObjectId | IUser;
  upvotes: number;
  downvotes: number;
  answers: mongoose.Schema.Types.ObjectId[] | IAnswer[];
  createdAt: Date;
  updatedAt: Date;
}

export default IQuestion;
