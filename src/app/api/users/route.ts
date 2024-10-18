import connectDB from "@/core/libs/db";
import schema from "./schema";
import { NextRequest, NextResponse as res } from "next/server";
import User, { createToken, hashPassword } from "../models/User";
import Role from "../models/Role";

export const GET = async () => {
  try {
    await connectDB();
    const users = await User.find().select("-password").populate("role");
    if (!users || users.length === 0)
      return res.json({ error: "No Data Found" }, { status: 204 });
    return res.json(users, { status: 200 });
  } catch (error) {
    console.log(error);
    return res.json({ error: error }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();

    const body = await req.json();
    const parsedBody = schema.safeParse(body);

    if (!parsedBody.success)
      return res.json({ error: parsedBody.error }, { status: 400 });

    const userExists = await User.findOne({
      email: parsedBody.data.email,
    });
    if (userExists)
      return res.json(
        { error: "User with specified email already exists" },
        { status: 400 }
      );

    const usernameExists = await User.findOne({
      username: parsedBody.data.username,
    });
    if (usernameExists)
      return res.json(
        { error: "User with specified email already exists" },
        { status: 400 }
      );

    if (parsedBody.data.role) {
      const roleExists = await Role.findById(parsedBody.data.role);
      if (!roleExists)
        return res.json(
          { error: "The specified role does not exist" },
          { status: 400 }
        );
    }

    const password = await hashPassword(parsedBody.data.password);

    const user = await new User({
      ...parsedBody.data,
      password,
    }).save();

    const token = createToken(user);

    return res.json(
      { user },
      { status: 200, headers: { "x-auth-token": token } }
    );
  } catch (error) {
    console.log(error);
    return res.json({ error: error }, { status: 500 });
  }
};
