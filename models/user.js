import { model, Schema } from "mongoose";

export default model("User", new Schema({
    _id: String,
    name: {
        type: String,
        required: [true, "The participant name is required"]
    },
    password: {
        type: String,
        required: [true, "The participant password is required"]
    },
    email: {
        type: String,
        required: [true, "The participant email is required"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "The participant phone is required"]
    },
    collegeName: {
        type: String,
        required: [true, "The college name of the participant is required"]
    },
    year: {
        type: String,
        enum: ["UG1", "UG2", "UG3", "UG4"],
        default: "UG1"
    },
    address: {
        type: String,
        required: false
    }
}))