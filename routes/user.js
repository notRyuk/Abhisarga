import Base64 from 'crypto-js/enc-base64.js';
import hmacSHA512 from 'crypto-js/hmac-sha512.js';
import sha256 from 'crypto-js/sha256.js';
import { Router } from "express";
import { PRIVATE_KEY } from "../config.js";
import { decrypt, validateEmail, validatePhone } from '../helper.js';
import Session from "../models/session.js";
import User from '../models/user.js';

const app = Router()

app.post("/register", async (req, res) => {
    const keys = Object.keys(req.body)
    const values = Object.values(req.body)
    const required = ["name", "password", "email", "phone", "collegeName"]
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
    if(!validatePhone(req.body.phone.trim())) {
        res.status(404).send({
            status: 404,
            message: "Phone format invalid!"
        })
        return
    }
    if (await User.findOne({ email: req.body.email })) {
        res.status(400).send({
            status: 400,
            message: "The registered email already exists!"
        })
        return
    }
    req.body._id = req.body.email.trim()
    const user = await new User(req.body).save()
    if(!user) {
        res.status(404).send({
            status: 404,
            message: "An error occurred in the database! Try registering after a while!"
        })
        return
    }
    const userSession = await Session.findOne({ username: req.body.email })
    if (userSession) {
        if (new Date(Date.now()) - new Date(userSession.timestamp)/86400000 <= 1) {
            res.status(200).send({
                status: 200,
                message: "Successfully logged in!",
                session
            })
            return
        }
        else {
            await Session.findOneAndRemove({ username: email })
        }
    }
    const hashDigest = sha256(req.body.email+req.body.password)
    const hmacDigest = Base64.stringify(hmacSHA512(new Date(Date.now()).toUTCString()+hashDigest, PRIVATE_KEY))
    const session = await new Session({username: req.body.email, token: hmacDigest}).save()
    if(!session) {
        res.status(404).send({
            status: 404,
            message: "An error occurred in the database! Try logging in after sometime"
        })
        return
    }
    delete session._id
    delete session.__v
    res.status(200).send({
        status: 200,
        message: "Successfully signed up in!",
        session
    })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    if(!email) {
        res.status(403).send({
            status: 403,
            message: "Unauthorized! The email field is empty"
        })
        return
    }
    if(!password) {
        res.status(403).send({
            status: 403,
            message: "Unauthorized! The password field is empty"
        })
        return
    }
    const existingUser = await User.findOne({ email })
    console.log(existingUser)
    if (!existingUser || decrypt(existingUser.password) !== decrypt(password)) {
        res.status(404).send({
            status: 404,
            message: "No account exists with these credentials!"
        })
        return
    }
    const userSession = await Session.findOne({ username: email })
    if (userSession) {
        if (new Date(Date.now()) - new Date(userSession.timestamp)/86400000 <= 1) {
            res.status(200).send({
                status: 200,
                message: "Successfully logged in!",
                session
            })
            return
        }
        else {
            await Session.findOneAndRemove({ username: email })
        }
    }
    const hashDigest = sha256(email+password)
    const hmacDigest = Base64.stringify(hmacSHA512(new Date(Date.now()).toUTCString()+hashDigest, PRIVATE_KEY))
    const session = await new Session({username: email, token: hmacDigest}).save()
    if(!session) {
        res.status(404).send({
            status: 404,
            message: "An error occurred in the database! Try logging in after sometime"
        })
        return
    }
    delete session._id
    delete session.__v
    res.status(200).send({
        status: 200,
        message: "Successfully logged in!",
        session
    })
})

app.post("/something", (_, res) => res.send("something"))

export default app