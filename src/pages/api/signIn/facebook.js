import passport from 'passport';
import nextConnect from 'next-connect';
import { facebook } from '../../../../api_modules/passport';
import { encryptSession } from '../../../../api_modules/iron';
import { setTokenCookie } from '../../../../api_modules/auth-cookies';
import resJson from '../../../../api_modules/resJsonStandardized';

// todo autorization
// todo facebook login
// todo google login
// todo forgot password

const formName = 'facebook';

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

passport.use(facebook);

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
