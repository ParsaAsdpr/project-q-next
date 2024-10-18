import mongoose from "mongoose";
import IRole from "./IRole";

interface IUser {
  _id: string;
  email: string;
  username: string;
  password: string;
  role: mongoose.Schema.Types.ObjectId | IRole;
  profile: {
    name: string;
    avatar: string;
    bio: string;
    occupation: string;
  };
  isOnline: boolean;
  isActive: boolean;
  lastIP: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}

export default IUser;
