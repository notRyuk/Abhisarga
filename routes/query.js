import { Router } from "express";
import mailer from "nodemailer"
import { MAILER_MAIL, MAILER_PASS } from "../config.js"
import { validateEmail } from "../helper.js";
import Query from "../models/query.js"

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

app.post('/sendMail', async (req, res) => {
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

app.post("/create", async (req, res) => {
    const keys = Object.keys(req.body)
    const values = Object.values(req.body)
    const required = ["email", "title", "description"]
    for(var i of required) {
        if(!keys.includes(i) || values[keys.indexOf(i)].trim().length === 0) {
            res.status(404)
            res.send({
                status: 404,
                message: `The ${i} parameter is missing or empty in the request body.`
            })
            return
        }
    }
    if(!validateEmail(req.body.email.trim())) {
        res.status(404).send({
            status: 404,
            message: "Email format invalid!"
        })
        return
    }
    const query = await new Query(req.body).save()
    if(!query) {
        res.status(404).send({
            status: 404,
            message: "An error occurred in the database! Try logging in after sometime"
        })
        return
    }
    delete query.__v
    delete query._id
    res.status(200).send({
        status: 200,
        message: "Query sent successfully! Await for the reply mail.",
        query
    })
})

app.get("/get", async (req, res) => {
    const queries = await Query.find(req.body)
    if(!queries) {
        res.status(404).send({
            status: 404,
            message: "An error occurred in the database! Try logging in after sometime"
        })
        return
    }
    res.status(200).send({
        status: 200,
        queries
    })
})

export default app