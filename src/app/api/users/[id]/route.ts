import connectDB from "@/core/libs/db";
import User from "../../models/User";
import { NextRequest, NextResponse as res } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();
    const user = await User.findById(params.id).select("-password");
    if (!user) return res.json({ error: "User not found" }, { status: 404 });
    return res.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return res.json({ error: error }, { status: 500 });
  }
};
