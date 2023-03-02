import { model, Schema } from "mongoose";

export default model("queries", new Schema({
    email: {
        type: String,
        required: true
    },
    queries: {
        type: [String],
        required: true,
        default: []
    }
}))
