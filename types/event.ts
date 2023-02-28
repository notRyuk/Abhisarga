export default interface Event {
    _id: number
    name: string
    timings: {
        start: Date,
        end: Date
    },
    rules: string[]
    prizes: {
        rank: number,
        amount: number,
        winner?: Number
    }[]
    participants: EventParticipants[]
}

export interface EventParticipants {
    name: string
    email: string
    phone: string
    collegeName: string
    address?: {
        street?: string
        city: string
        state: string
        pincode: number
    }
}