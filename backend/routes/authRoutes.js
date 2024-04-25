import express from 'express';
import {
  studentsignup,
  studentlogin,
  forgotPassword,
} from '../controllers/authController.js';
import {
  verifyStudEmail,
} from '../controllers/verificationController.js';

const router = express.Router();

router.post('/student-signup', studentsignup);
router.post('/student-login', studentlogin);
router.post('/forgotpass', forgotPassword);
router.get('/studverify', verifyStudEmail);

export default router;
