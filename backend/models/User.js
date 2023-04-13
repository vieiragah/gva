import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
},
{ timestamps: true })
const userModel = model("user", userSchema)

export default userModel