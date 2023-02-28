import { config } from "dotenv";
config()

export const PRIVATE_KEY = process.env.PRIVATE_KEY || "PRIVATE_KEY"
export const DB_URL = process.env.DB_URL || ""
const NODE_ENV = process.env.NODE_ENV || "DEVELOPMENT"
const PORT = process.env.PORT || 5173
const BASE = process.env.BASE || '/'