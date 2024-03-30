import * as dotenv from 'dotenv';
dotenv.config();



export const DB_NAME = process.env.POSTGRES_DATABASE ;
export const DB_USER = process.env.USERNAME;
export const DB_PASSWORD = process.env.PASSWORD;
export const DB_HOST = process.env.POSTGRES_HOST;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE;
const PORT = process.env.PORT || 4005;

module.exports = {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    JWT_SECRET,
    JWT_EXPIRE,
    PORT,
}