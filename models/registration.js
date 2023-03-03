import { model, Schema } from "mongoose";

export default model("registration", new Schema({
    _id: String,
    teamName: {
        type: String,
        required: false
    },
    participants: {
        type: [String],
        required: true  
    },
    format: {
        type: String,
        enum: ['INDIVIDUAL', 'TEAM'],
        default: 'INDIVIDUAL'
    }
}))
