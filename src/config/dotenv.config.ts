import dotenv from 'dotenv';

dotenv.config();

export const dbHost = process.env.DB_HOST;
export const dbPort = process.env.DB_PORT;
export const dbUser = process.env.DB_USER;
export const dbPassword = process.env.DB_PASSWORD;
export const dbDatabase = process.env.DB_DATABASE;