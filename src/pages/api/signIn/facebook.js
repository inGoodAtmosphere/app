import passport from 'passport';
import nextConnect from 'next-connect';
import { encryptSession } from '../../../../api_modules/iron';
import { setTokenCookie } from '../../../../api_modules/auth-cookies';
import resJson from '../../../../api_modules/resJsonStandardized';
// import { facebook } from '../../../../api_modules/passport';
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

// todo autorization
// todo facebook login
// todo google login
// todo forgot password

const formName = 'facebook';

// here comes the fuck up

const callbackURL =
  process.env.NODE_ENV === 'production'
    ? 'http://www.ingoodatmosphere.com/logowanie'
    : 'http://localhost:3000/api/signIn/facebook';
const clientID =
  process.env.NODE_ENV === 'production'
    ? process.env.FB_APP_ID
    : '632567057597727';
const clientSecret =
  process.env.NODE_ENV === 'production'
    ? process.env.FB_APP_SECRET
    : '80c7d46012dcdfaba3f31354dcd94154';

const facebook = new FacebookStrategy(
  {
    clientID,
    clientSecret,
    callbackURL,
  },
  (accessToken, refreshToken, profile, cb) => {
    const user = profile;
    console.log(profile);
    console.log(user);
    return cb(null, user);
  },
);

// here ends the fuckup

passport.use(facebook);
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

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      const user = await authenticate('facebook', req, res);
      const session = { ...user };
      // The token is a string with the encrypted session
      const token = await encryptSession(session);

      setTokenCookie(res, token);
      res.json(resJson(formName, true, 'Logowanie przebiegło pomyślnie', []));
    } catch (error) {
      console.error(error);
      res.json(resJson(formName, false, 'Napotkaliśmy jakiś błąd', []));
    }
  });
