import { model, Schema } from "mongoose";

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
    participants: {
        type: [{
            name: {
                type: String,
                required: [true, "The participant name is required"]
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
        }],
        default: []
    }
}))