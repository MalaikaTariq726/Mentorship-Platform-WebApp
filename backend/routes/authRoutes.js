import express from 'express';
import { 
  login,
  signup,
  updateRole,
  forgotPassword
} from '../controllers/authController.js';

const router = express.Router();

router.put('/forgotPassword', forgotPassword);
router.put('/updateRole', updateRole);
router.post('/signup', signup);
router.post('/login', login);

export default router;
