import connectDB from "@/core/libs/db";
import { NextRequest, NextResponse as res } from "next/server";
import User, { comparePassword, createToken } from "../models/User";
import schema from "./schema";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.json();

    const parsedBody = schema.safeParse(body);
    if (!parsedBody.success)
      return res.json({ error: parsedBody.error }, { status: 400 });

    const user = await User.findOne().where("username").equals(body.username);

    if (!user) return res.json({ error: "User not found" }, { status: 404 });

    const isPasswordCorrect = comparePassword(
      user.password,
      parsedBody.data.password
    );

    if (!isPasswordCorrect)
      return res.json({ error: "Incorrect password" }, { status: 400 });

    return res.json({ token: createToken(user) }, { status: 200 });
  } catch (err) {
    console.log(err);
    res.json({ error: err }, { status: 500 });
  }
};
