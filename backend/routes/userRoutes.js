import express from "express";
import { loginUser} from '../controllers/userController.js';

const router = express.Router();

router.post('/user/login/:id', loginUser);
//router.get('/verify', verifyToken);
export { router as userRouter };