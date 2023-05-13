import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    adm: {
      type: Boolean,
      default: false,
    },
    enf: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const userModel = model("user", userSchema);

export default userModel;
