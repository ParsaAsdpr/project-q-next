import { NextRequest, NextResponse as res } from "next/server";
import Question from "../models/Question";
import connectDB from "@/core/libs/db";
import schema from "./schema";
import User from "../models/User";
import { jwtDecode } from "jwt-decode";
import IUser from "@/core/types/IUser";
import Category from "../models/Category";

export const GET = async () => {
  try {
    await connectDB();
    const questions = await Question.find();

    if (!questions || questions.length === 0)
      return res.json({ error: "No Data Found" }, { status: 204 });

    return res.json(questions, { status: 200 });
  } catch (error) {
    console.log(error);
    return res.json({ error: error }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();

    const token = req.headers.get("x-auth-token");
    if (!token) return res.json({ error: "Unauthorized" }, { status: 401 });

    const decodedToken: IUser = jwtDecode(token);
    const user = await User.findById(decodedToken._id);
    if (!user) return res.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const parsedBody = schema.safeParse(body);
    if (!parsedBody.success)
      return res.json({ error: parsedBody.error }, { status: 400 });

    const { categories } = parsedBody.data;

    if (categories && categories.length > 0) {
      const foundCategories = await Category.find({ _id: { $in: categories } });

      if (foundCategories.length !== categories.length) {
        return res.json(
          { error: "One or more specified categories do not exist" },
          { status: 400 }
        );
      }
    }
    const question = await new Question({
      ...parsedBody.data,
      user: user._id,
    }).save();

    if (categories && categories.length > 0) {
      await Category.updateMany(
        { _id: { $in: categories } },
        { $push: { questions: question._id } }
      );
    }

    return res.json(question, { status: 200 });
  } catch (error) {
    console.log(error);
    return res.json({ error: error }, { status: 500 });
  }
};
