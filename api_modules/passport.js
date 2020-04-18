const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const ValidationError = require('./validationError');
// const passport = require('passport');
const dbQuery = require('./dbQuery');
require('dotenv').config();

const callbackURL =
  process.env.NODE_ENV === 'PRODUCTION'
    ? 'localhost:3000/api/logowanie'
    : 'www.ingoodatmosphere.com/logowanie';

export const facebook = new FacebookStrategy(
  {
    clientID: process.env.FB_APP_ID,
    clientSecret: process.env.FB_APP_SECRET,
    callbackURL,
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    return cb(null, profile);
  },
);
export default new LocalStrategy(
  { usernameField: 'email' },
  async (username, password, done) => {
    const user = await dbQuery
      .findUser(username, (err) => {
        if (err) return done(err, false);
        return null;
      })
      .catch((err) => {
        return done(err, false);
      });
    if (!user || username === '' || user.email === '') {
      return done(
        null,
        new ValidationError(
          'Nie znaleziono użytkownika o podanym adresie email',
          'email',
        ),
      );
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.log(err);
        return done(err, false);
      }
      if (!isMatch || password === '' || user.password === '') {
        return done(null, new ValidationError('Złe hasło', 'password'));
      }
      return done(null, user);
    });
    return null;
  },
);
