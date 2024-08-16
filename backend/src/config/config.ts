import dotenv from 'dotenv'

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === "Development"
export const TEST = process.env.NODE_ENV === "Test"
export const SERVER_HOSTNAME = process.env.NODE_ENV || "localhost"
export const DB_NAME="AssignMent_One"
export const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 3000

export const server = {
    SERVER_HOSTNAME,
    SERVER_PORT,
    DB_NAME,
    DEVELOPMENT,
    TEST
}