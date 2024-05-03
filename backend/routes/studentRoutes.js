import express from "express";
import { loginStudent} from '../controllers/studentController.js';
import {isStudent} from '../controllers/studentController.js';

const router = express.Router();

router.post('/student/login', loginStudent);
router.get('/', isStudent, (req, res) => {
  res.send('Student Route');
});
export { router as studentRouter };