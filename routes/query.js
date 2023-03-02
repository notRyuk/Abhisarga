import { Router } from "express";

const app = Router()

app.post('/sendmail', async (req, res) => {
    const { reply } = req.body
    if (!reply) {
        res.status(403).send({
            status: 403,
            message: "The reply field is empty!"
        })
        return
    }

    
})