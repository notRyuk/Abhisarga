import { Router } from "express";
import { PRIVATE_KEY } from "../config"
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

const app = Router()

interface AdminEmail {
    email: string
    password: string
}

const adminEmails: AdminEmail[] = []

app.post("/login", async (req, res) => {
    const { email, password }: {
        email?: string,
        password?: string
    } = req.body
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
    if(!adminEmails.includes({email, password})) {
        res.status(403).send({
            status: 403,
            message: "Unauthorized! The email/password doesn't match the admins field is empty"
        })
        return
    }
    const hashDigest = sha256(email+password)
    const hmacDigest = Base64.stringify(hmacSHA512(new Date(Date.now()).toUTCString()+hashDigest, PRIVATE_KEY))
    
})

export default app