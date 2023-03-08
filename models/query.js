import { model, Schema } from "mongoose";

export default model("query", new Schema({
    email: {
        type: String,
        required: [true, "The email of the query is required"]
    },
    title: {
        type: String,
        required: [true, "The title of the query is required"]
    },
    description: {
        type: String,
        required: [true, "The description of the query is required"]
    }
}))
