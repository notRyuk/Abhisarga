import Base64 from 'crypto-js/enc-base64.js';
import hmacSHA512 from 'crypto-js/hmac-sha512.js';
import sha256 from 'crypto-js/sha256.js';
import { Router } from "express";
import { PRIVATE_KEY } from "../config.js";
import { validateEmail, validatePhone } from '../helper.js';
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
    if(await User.findById(req.body.email.trim())) {
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
    delete user.__v
    delete user._id
    res.status(200).send({
        status: 200,
        message: "Successfully registered!",
        user
    })
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body
    if(!username) {
        res.status(403).send({
            status: 403,
            message: "Unauthorized! The username field is empty"
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
    const userSession = await Session.findOne({ username: username })
    if (userSession) {
        if (new Date(Date.now()) - new Date(userSession.timestamp)/86400000 <= 1) {
            res.status(200).send({
                status: 200,
                message: "Successfully logged in!",
                session
            })
            return;
        }
        else {
            await userSession.delete()
        }
    }
    const hashDigest = sha256(username+password)
    const hmacDigest = Base64.stringify(hmacSHA512(new Date(Date.now()).toUTCString()+hashDigest, PRIVATE_KEY))
    const session = await new Session({username, token: hmacDigest}).save()
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

export default app