import {userdb} from "../models/userModel.js"
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = '1m';

const loginUser = async (req, res) => {
    const {email, password } = req.body;
    
    try {
      const user = await userdb.findOne({email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      const token = jwt.sign(
        { email: user.email, id: user._id },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
      );
  
      return res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const googleLoginUser = async (req, res) => {
    const {id } = req.body;
    
    try {
      const user = await userdb.findOne({googleId: id });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const token = jwt.sign(
        { email: user.email, id: user._id },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
      );
  
      return res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  export {loginUser as loginUser}
  export {googleLoginUser as googleLoginUser}

  