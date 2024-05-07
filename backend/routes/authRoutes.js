import express from 'express';
import signup from '../controllers/authController.js';


const router = express.Router();

router.post('/signup', signup);

//router.post('/forgotpass', forgotPassword);
//router.get('/studverify', verifyStudEmail);

export default router;
