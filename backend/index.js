import Connection from "./db.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { studentRouter } from './routes/studentRoutes.js';

dotenv.config();
Connection();

const app = express();
app.use(express.json());
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    })
);
app.use('/student', studentRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
