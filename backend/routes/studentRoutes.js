import bcrypt from "bcrypt";
import express from "express";
import { loginStudent} from '../controllers/studentController.js';
import {isStudent} from '../controllers/studentController.js';
import { student } from "../models/studentModels.js";

const router = express.Router();

router.get("/login", async (req, res) => {
    const { email, password } = req.query; 

    try {
        const user = await student.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            return res.status(200).json({ message: "Login successful", user });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error occurred during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
router.post('/student/login', loginStudent);
router.get('/', isStudent, (req, res) => {
  res.send('Student Route');
});
export { router as studentRouter };