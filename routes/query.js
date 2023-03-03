import { Router } from "express";
import mailer from "nodemailer"
import { MAILER_MAIL, MAILER_PASS } from "../config.js"

const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
        user: MAILER_MAIL,
        pass: MAILER_PASS
    }
})

class Mailer {
    static async sendMail(to, subject, text) {
        return await new Promise((resolve, reject) => {
            transporter.sendMail({
                from: MAILER_MAIL,
                to,
                subject,
                text
            }, (err, info) => {
                if(err) {
                    reject(err)
                    return
                }
                if(info) {
                    resolve(info)
                }
            })
        }) 
    }
}

const app = Router()

app.post('/sendmail', async (req, res) => {
    const { query, email, reply } = req.body
    if (!reply) {
        res.status(403).send({
            status: 403,
            message: "The reply field is empty!"
        })
        return
    }
    const subject = "Reg: " + query
    const response = await Mailer.sendMail(email, subject, reply)

    res.json(response)
})

export default app