import { Router } from "express";
import Event from "../models/event";
import Registration from "../models/registration";
import User from "../models/user";

const app = Router()

app.post('/registerforevent', async (req, res) => {
    const { eventName, email } = req.body

    regEvent = await Event.findOne({ eventName: eventName }).exec()
    if (!regEvent) {
        res.status(404).send({
            message: "There is no such event!"
        })
        return;
    }

    if (regEvent.maxTeamSize === 1) {
        const newParticipant = new Registration({
            eventName: eventName,
            _id: "aa",
            participants: [email]
        })

        await newParticipant.save()

        res.status(200).send({
            message: "Successfully registered for event : " + eventName,
            registrationDetails: newParticipant
        })
    }
    else {
        const { teamName } = req.body
        const newTeam = new Registration({
            eventName: eventName,
            _id: "aa",
            participants: [email],
            teamName: teamName
        })

        await newTeam.save()

        res.status(200).send({
            message: "Successfully registered for event : " + eventName,
            registrationDetails: newTeam
        })
    }
    return;
})

app.post('/jointeam', async (req, res) => {
    const { eventName, teamId, email } = req.body

    curEvent = await Event.findOne({ eventName: eventName }).exec()
    existingTeam = await Registration.findOne({ eventName: eventName, _id: teamId }).exec()

    if (!existingTeam) {
        res.status(404).send({
            message: "No such team exists; please check the entered details again!"
        })
        return;
    }

    if (existingTeam.participants.length >= curEvent.maxTeamSize) {
        res.status(403).send({
            message: "This team is already full!",
        })
        return
    }

    existingTeam.participants.push(email)
    await existingTeam.save()

    res.status(200).send({
        message: "Joined team successfully!",
        registrationDetails: existingTeam
    })
    return
})

app.get('/getallparticipants/:eventname', async (req, res) => {
    const eventName = req.params.eventname
    const participants = await Registration.find({ eventName: eventName })
    const emails = participants.participants

    let participantDetails = []
    for (let i=0; i<emails.length; i++) {
        const user = await User.findOne({ email: emails[i] })
        participantDetails.push(user)
    }

    res.status(200).send({
        participants: participantDetails
    })
    return;
})

app.get('/getmyteams/:email', async (req, res) => {
    const userId = req.params.email
    const registeredEvents = await Registration.find({ participants: { "$in": [email] } })

    res.status(200).send({
        myEvents: registeredEvents
    })
    return
})
