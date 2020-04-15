/* eslint-disable consistent-return */
// const passport = require('passport');

// export default (req, res, next) => {
//   passport.authenticate('auth0', (err, user) => {
//     if (err) return next(err);
//     if (!user) return res.redirect('/login');
//     req.logIn(user, (error) => {
//       if (error) return next(error);
//       console.log('logged succesfully');
//       // res.redirect('/');
//     });
//   })(req, res, next);
// };

import passport from 'passport';
import nextConnect from 'next-connect';
import localStrategy from '../../../api_modules/passport';
import { encryptSession } from '../../../api_modules/iron';
import { setTokenCookie } from '../../../api_modules/auth-cookies';

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    })(req, res);
  });

passport.use(localStrategy);

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      const user = await authenticate('local', req, res);
      // session is the payload to save in the token, it may contain basic info about the user
      const session = { ...user };
      // The token is a string with the encrypted session
      const token = await encryptSession(session);

      setTokenCookie(res, token);
      res.json({
        isSuccessful: true,
        message: 'Logowanie przebiegło pomyślnie',
        errors: [],
      });
    } catch (error) {
      console.error(error);
      res.json({
        isSuccessful: false,
        message: 'napotkaliśmy jakiś błąd',
        errors: [new Error('stencel chuj')],
      });
    }
  });
