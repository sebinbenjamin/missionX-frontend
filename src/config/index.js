import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.REACT_APP_API_SERVER_URL || 'localhost:4000/';
