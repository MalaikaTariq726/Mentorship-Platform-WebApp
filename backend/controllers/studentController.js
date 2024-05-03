import {student} from "../models/studentModels.js"
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = '1m';
const loginStudent = async (req, res) => {
    const {email, password } = req.body;
    
    try {
      const stud = await student.findOne({email });
  
      if (!stud) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      if (!(await bcrypt.compare(password, stud.password))) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      const token = jwt.sign(
        { email: stud.email, id: stud._id },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
      );
  
      return res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const verifyStudentToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decodedData = jwt.verify(token, JWT_SECRET);
      next();
    } catch (error) {
      res.status(500).json({
        message: 'Error during token verification.',
        error: error.message,
      });
    }
  };
  
  const isStudent = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
      const decodedData = jwt.verify(token, JWT_SECRET);
  
      const stud = await student.findById(decodedData.id);
      if (stud) {
        next();
      } else {
        res.status(401).json({
          message: 'Unauthorized access',
        });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error during token verification.',
        error: error.message,
      });
    }
  };
  
  export {loginStudent as loginStudent}
  export {isStudent as isStudent}
  export {verifyStudentToken as verifyStudToken}

  