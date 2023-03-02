import { model, Schema } from "mongoose";
import user from "./user";

export default model("event", new Schema({
    _id: Number,
    name: {
        type: String,
        required: [true, "Event name is required"]
    },
    timings: {
        type: {
            start: {
                type: Date,
                required: [true, "The start date of the event is required"]
            },
            end: {
                type: Date,
                required: [true, "The end date of the event is required"]
            }
        },
        required: [true, "The timings of the event are required"]
    },
    rules: {
        type: [String],
        default: []
    },
    prizes: {
        type: [{
            rank: {
                type: Number,
                required: [true, "The rank of the prize is required"]
            },
            amount: {
                type: Number,
                required: [true, "The winning amount of the prize is required"]
            },
            winner: {
                type: Number,
                required: false
            }
        }],
        default: []
    },
    format: {
        type: Number,
        enum: ['INDIVIDUAL', 'TEAM'],
        default: 'INDIVIDUAL'
    },
    participants: {
        type: [user]
    }
}))
