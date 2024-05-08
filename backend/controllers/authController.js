import { userdb } from "../models/userModel.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = "1m";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email);
    const user = await userdb.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password!" });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION,
    });

    res.status(200).json({ result: user, token });
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ message: "Error during login.", error: error.message });
  }
};

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

export{ signup as signup} ;
export { login as login };
