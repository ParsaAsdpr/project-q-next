import connectDB from "@/core/libs/db";
import { NextRequest, NextResponse as res } from "next/server";
import schema from "./schema";
import Role from "../models/Role";

export const GET = async () => {
  try {
    connectDB();
    const roles = await Role.find();

    if (!roles || roles.length <= 0)
      return res.json({ error: "There are no roles" }, { status: 404 });

    return res.json(roles, { status: 200 });
  } catch (error) {
    console.log(error);
    res.json(error, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    connectDB();
    const body = await req.json();
    const parsedBody = schema.safeParse(body);

    if (!parsedBody.success)
      return res.json({ error: parsedBody.error }, { status: 400 });

    const roleExists = await Role.findOne({ name: parsedBody.data.name });

    if (roleExists)
      return res.json(
        { error: "A role with specified slug exists" },
        { status: 400 }
      );

    const role = await new Role({
      ...parsedBody.data,
    }).save();

    return res.json(role, { status: 200 });
  } catch (error) {
    console.log(error);
    return res.json({ error: error }, { status: 500 });
  }
};
