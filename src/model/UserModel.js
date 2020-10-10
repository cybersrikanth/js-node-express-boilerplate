const mongoose = require("mongoose");
const { USER_MODEL } = require("../constants/MODELS");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
            min: 3,
            max: 25,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        /* 
            Remove session if you want to allow multiple sessions
            You can also use session object to allow multiple sessions and keep track on it
            Click the link below to know more
            https://cyber-srikanth.blogspot.com/2020/07/Maintaining-STATE-with-JWT.html
        */
        session: {
            type: String,
        },
        settings: {
            type: Object,
            default: null,
        },
        plan: {
            type: Object,
        },
        createdAt: { type: Date, select: false },
        updatedAt: { type: Date, select: false },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model(USER_MODEL, userSchema);
