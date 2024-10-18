import IRole from "@/core/types/IRole";
import mongoose from "mongoose";
const { Schema } = mongoose;

export const roleSchema = new Schema<IRole>({
  name: {
    type: String,
    minlength: 30,
    required: true,
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

const Role = mongoose.models.Role || mongoose.model<IRole>("Role", roleSchema);

export default Role;
