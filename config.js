import { config } from "dotenv";
config()

export const PRIVATE_KEY = process.env.PRIVATE_KEY || "PRIVATE_KEY"
export const DB_URL = process.env.DB_URL || ""
export const NODE_ENV = process.env.NODE_ENV || "DEVELOPMENT"
export const PORT = process.env.PORT || 5173
export const BASE = process.env.BASE || '/'