import { Router } from "express";

const app = Router()

app.post("/create", async (req, res) => {
    const body = req.body
    if(!body.name || !body.name.length) {
        res.status(404).send({
            status: 404,
            message: "Name of the event is missing"
        })
        return
    }
    if(!body.timings) {
        res.status(404).send({
            status: 404,
            message: "Timings of the event is missing"
        })
        return
    }
    if(!body.timings.start) {
        res.status(404).send({
            status: 404,
            message: "Start time of the event is missing"
        })
        return
    }
    if(!body.timings.end) {
        res.status(404).send({
            status: 404,
            message: "Start time of the event is missing"
        })
        return
    }
    
})

export default app