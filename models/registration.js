import { model, Schema } from "mongoose";

export default model("registration", new Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    eventName: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: false
    },
    participants: {
        type: [String],
        required: true  
    }
}))
