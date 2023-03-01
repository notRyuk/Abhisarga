import Base64 from 'crypto-js/enc-base64.js';
import hmacSHA512 from 'crypto-js/hmac-sha512.js';
import sha256 from 'crypto-js/sha256.js';
import { Router } from "express";
import { readFileSync as readFile } from 'fs';
import { PRIVATE_KEY } from "../config.js";
import Session from "../models/session.js";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Router()


const adminLogins = []
readFile(resolve(__dirname, "..", "emails.txt"), "utf-8").split("\n").forEach(line => {
    line = line.trim()
    if(line.startsWith("#")) {
        return
    }
    const loginDetails = line.split("::")
    adminLogins.push({
        username: loginDetails?.[0]?.trim(),
        password: loginDetails?.[1]?.trim()
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
    if(!adminLogins.includes({ username, password })) {
        res.status(403).send({
            status: 403,
            message: "Unauthorized! The username/password doesn't match the admins field is empty"
        })
        return
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
    res.status(200).send({
        status: 200,
        message: "Successfully logged in!",
        session: session.__doc
    })
})

export default app