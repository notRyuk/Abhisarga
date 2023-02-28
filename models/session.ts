import { model, Schema } from "mongoose"
import Session from "../types/session"

export default model<Session>("session", new Schema({
    token: {
        type: String,
        required: [true, "The token of the session is required"]
    },
    timestamp: {
        type: String,
        default: new Date(Date.now()).toUTCString()
    },
    username: {
        type: String,
        required: [true, "The email of the user session is required"]
    }
}))