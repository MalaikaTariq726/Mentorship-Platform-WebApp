import Connection from "./db.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  authRoutes  from './routes/authRoutes.js';

dotenv.config();
Connection();

const app = express();
app.use(express.json());
app.use( cors({
    origin: "http://localhost:3000",
    credentials: true, 
  })
);
app.use('/auth', authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
