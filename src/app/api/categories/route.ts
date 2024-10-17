import connectDB from "@/core/libs/db";
import Category from "../models/Category";
import { NextRequest, NextResponse as res } from "next/server";
import schema from "./schema";
import IUser from "@/core/types/IUser";
import { jwtDecode } from "jwt-decode";
import User from "../models/User";

export const GET = async () => {
  try {
    await connectDB();
    const categories = await Category.find();
    if (!categories || categories.length === 0)
      return res.json({ error: "No Data Found" }, { status: 204 });
    return res.json(categories, { status: 200 });
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

    const category = await new Category({
      ...parsedBody.data,
    }).save();
    return res.json(category, { status: 200 });
  } catch (error) {
    console.log(error);
    return res.json({ error: error }, { status: 500 });
  }
};
