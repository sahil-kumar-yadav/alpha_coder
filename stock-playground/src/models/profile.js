// here we write code to create a schema

import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema(
    {
        id:Number,
        name: String,
        coins: Number,
        cash:Number
    },
    {
        timestamps: true,
    }
);



const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;