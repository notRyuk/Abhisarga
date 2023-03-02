import { model, Schema } from "mongoose";

export default model("user", new Schema({
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
        required: [true, "The participant email is required"]
    },
    phone: {
        type: String,
        required: [true, "The participant phone is required"]
    },
    collegeName: {
        type: String,
        required: [true, "The college name of the participant is required"]
    },
    address: {
        type: {
            street: {
                type: String,
                required: false
            },
            city: {
                type: String,
                required: [true, "The city-address of the participant is required"]
            },
            state: {
                type: String,
                required: [true, "The state-address of the participant is required"]
            },
            pincode: {
                type: Number,
                required: [true, "The pincode-address of the pariticipant is required"]
            }
        },
        required: false
    }
}))