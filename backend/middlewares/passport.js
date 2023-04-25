import { Strategy } from "passport-local";
import passport from "passport";
import bcrypt from "bcryptjs";

// Load User model
import User from "../models/User.js";

class Passport {
  init() {
    passport.use(
      new Strategy({ usernameField: "email" }, (email, password, done) => {
        // Match user
        User.findOne({
          email: email,
        }).then((user) => {
          if (!user) {
            return done(null, false, { message: "E-mail não encontrado" });
          }

          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err)
              throw {
                error: "Não foi possivel autenticar",
                err,
              };
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Senha Incorreta" });
            }
          });
        });
      })
    );

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
        done(err, user);
      });
    });
  }
}

export default new Passport().init();
