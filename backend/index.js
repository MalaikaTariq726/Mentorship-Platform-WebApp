import Connection from "./db.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRouter } from './routes/userRoutes.js';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleOAuth2Strategy } from 'passport-google-oauth20';

dotenv.config();
Connection();

const app = express();
app.use(express.json());

app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    })
);

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleOAuth2Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"]
  },
  async(accessToken, refreshToken, profile, done) => {
    try{

    } catch(error){
      return done(error, null);
    }
  })
);

app.use('/user', userRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
