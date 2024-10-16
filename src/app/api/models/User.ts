import IUser from "@/core/types/IUser";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const { Schema } = mongoose;

export const userSchema = new Schema<IUser>({
  username: {
    type: String,
    minlength: 3,
    maxlength: 25,
    required: true,
  },
  email: {
    type: String,
    minlength: 6,
    maxlength: 50,
    required: true,
  },
  profile: {
    name: String,
    avatar: String,
    bio: String,
    occupation: String,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  lastLogin: {
    type: Date,
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

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = (userPassword: string, password: string) => {
  return bcrypt.compareSync(password, userPassword);
};

export const createToken = (user: IUser) => {
  return jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
