const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const ValidationError = require('./validationError');
// const passport = require('passport');
const dbQuery = require('./dbQuery');

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
