import { model, Schema } from "mongoose";

export default model("queries", new Schema({
    _id: {
        type: String,
        required: true
    },
    queries: [{
        type: {
            title: {
                type: String,
                required: true
            },
            body: {
                type: String,
                required: true
            }
        },
        required: true,
        default: []
    }]
}))
