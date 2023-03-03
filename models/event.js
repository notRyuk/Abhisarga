import { model, Schema } from "mongoose";

export default model("Event", new Schema({
    eventName: {
        type: String,
        required: [true, "Event name is required"],
        unique: true
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
    maxTeamSize: {
        type: Number,
        required: true
    }
}))
