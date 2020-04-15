const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
// const passport = require('passport');
const dbQuery = require('./dbQuery');

export default new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    const user = await dbQuery.findUser(email);
    if (!user) {
      return done(null, false, {
        message: 'Nie znaleziono użytkownika o podanym adresie email',
      });
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.log(err);
      }
      if (!isMatch) {
        return done(null, false, { message: 'Złe hasło' });
      }
      return done(null, user);
    });
    return null;
  },
);
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // used to deserialize the user
// passport.deserializeUser(async (id, done) => {
//   let error;
//   const user = await dbQuery.findUserById(id, (err) => {
//     if (err) {
//       error = err;
//     }
//   });
//   if (!user) {
//     error = new Error('Błąd połączenia z serwerem');
//   }
//   done(error, user);
// });
