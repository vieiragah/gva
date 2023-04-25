import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import morgan from 'morgan';

import db from "./db/db.js";
import router from "./routes/router.js";
import Passport from "./middlewares/passport.js";

const app = express();

Passport;

db();
app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.use(
  session({
    secret: "api-gva123",
    resave: true,
    saveUninitialized: true,
    unset: "destroy",
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.use("/api", router);

app.listen(3000, () => {
  console.log("Servidor rodando");
});
