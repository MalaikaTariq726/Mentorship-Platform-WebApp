import express from 'express';
import {
  usersignup,
  userlogin,
  forgotPassword,
} from '../controllers/authController.js';
import {
  verifyStudEmail,
} from '../controllers/verificationController.js';

const router = express.Router();

router.post('/user-signup', usersignup);
router.post('/user-login', userlogin);
router.post('/forgotpass', forgotPassword);
router.get('/studverify', verifyStudEmail);

export default router;
