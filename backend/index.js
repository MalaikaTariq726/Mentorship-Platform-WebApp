import Connection from "./db.js";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import session from "express-session";
import passport from "passport";
import configurePassport from "./passportConfig.js";
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

// ---------------------------------------------------------------------
// setup session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

configurePassport(passport);

app.use(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/googleLogin",
    failureRedirect: "http://localhost:3000/login",
  })
);

app.get('/googleLogin', (req, res) => {
  const { user, token, isUserExist } = req.user;
  console.log(user, token, isUserExist);
  if(!isUserExist) {
    res.redirect(`http://localhost:3000/setrole?email=${user.email}`);
  } else {
    res.redirect('http://localhost:3000/home');
  }
});

app.use(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// ------------------------------------------------------------------

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
