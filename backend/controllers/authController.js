import {userdb} from "../models/userModel.js"
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();

const signup = async (req, res) => {
  console.log(req.body);
  const { email, password, role, name } = req.body;
  try {
      const existingUser = await userdb.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new userdb({
          email,
          password: hashedPassword,
          role,
          name
      });
      await newUser.save();
      return res.status(200).json({ message: 'User Accout Created Successfully' });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};

export default signup;