const bcrypt = require('bcrypt');
const dbQuery = require('../../../api_modules/selectQuery');
const ValidationError = require('../../../api_modules/validationError');
require('dotenv').config();

// TODO add notification when critical error while salting the password or connecting to the db
// todo password strength

const regexPromise = (regex, textToTest) =>
  new Promise((resolve) => {
    resolve(!regex.test(textToTest));
  });

let result;

// regex patterns for validation
const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordPattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;

export default async (req, res) => {
  if (req.method === 'POST') {
    // array for validation errors
    const errors = [];

    // initializing consts of user input
    const {
      email,
      login,
      password,
      confirmPassword,
      firstName,
      lastName,
      newsletter,
    } = req.body;

    // user input validation
    // email validation
    if (!email) {
      errors.push(
        new ValidationError('Musisz podać swój adres email', 'email'),
      );
    } else if (await regexPromise(emailPattern, email)) {
      errors.push(
        new ValidationError('Musisz wpisać poprawny adres email', 'email'),
      );
    }
    // login validation
    if (!login) {
      errors.push(new ValidationError('Musisz podać swój login', 'login'));
    } else if (login.length <= 4) {
      errors.push(
        new ValidationError(
          'Twój login musi posiadać co najmniej 5 znaków',
          'login',
        ),
      );
    }
    // password validation
    if (!password) {
      errors.push(new ValidationError('Musisz wpisać swoje hasło', 'password'));
    }
    // confirming a password
    else {
      if (!confirmPassword) {
        errors.push(
          new ValidationError(
            'Musisz ponownie wpisać swoje hasło',
            'confirmPassword',
          ),
        );
      } else if (password !== confirmPassword) {
        errors.push(
          new ValidationError(
            'Podane hasła nie zgadzają się',
            'confirmPassword',
          ),
        );
      }
      if (!passwordPattern.test(password) || password.length > 64) {
        errors.push(
          new ValidationError(
            'Twoje hasło musi posiadać od 8 do 64 znaków, posiadać jedną wielką i małą literę, jedną cyfrę oraz znak specjalny',
            'password',
          ),
        );
      }
    }
    // checking first name's length if it's set, cuz its still optional
    if (!!firstName && firstName < 2) {
      errors.push(
        new ValidationError('Twoje imię jest zbyt krótkie', 'firstName'),
      );
    }
    // checking last name's length if it's set, cuz its still optional
    if (!!lastName && lastName < 2) {
      errors.push(
        new ValidationError('Twoje nazwisko jest zbyt krótkie', 'lastName'),
      );
    }
    // validation ends here

    if (errors.length === 0) {
      const selectQuery = `select id from users where email=${dbQuery.escape(
        email,
      )};`;

      const selectResult = await dbQuery(selectQuery);
      if (selectResult.length > 0) {
        errors.push(
          new ValidationError(
            'Konto z podanym adresem email już istnieje',
            'email',
          ),
        );
        res.json({
          succeed: false,
          message: 'Rejestracja nie powiodła się, napraw zaistniałe błędy',
          errors,
        });
      } else {
        // encryption
        bcrypt.hash(password, process.env.SALT_ROUNDS, async (err, hash) => {
          if (err) {
            res.json({
              succeed: false,
              message:
                'Błąd podczas przetwarzania formularza, jeżeli widzisz ten błąd bezzwłocznie skontaktuj się z nami',
              errors,
            });
            console.log(err);
          } else {
            // I assigned these conditionals to array to fix bracket colors
            const NestedTemplateStrings = [
              !firstName ? '' : `,${dbQuery.escapeId('first-name')}`,
              !lastName ? '' : `,${dbQuery.escapeId('last-name')}`,
              !firstName ? '' : `,${dbQuery.escape(firstName)}`,
              !lastName ? '' : `,${dbQuery.escape(lastName)}`,
            ];

            const insertQuery = `insert into users(email,login,${dbQuery.escapeId(
              'password',
            )},permissions,newsletter${NestedTemplateStrings[0]}${
              NestedTemplateStrings[1]
            }) values(${dbQuery.escape(email)},${dbQuery.escape(
              login,
            )},${dbQuery.escape(hash)},${dbQuery.escape(
              'user',
            )}, ${dbQuery.escape(newsletter)}${NestedTemplateStrings[2]}${
              NestedTemplateStrings[3]
            })`;

            result = await dbQuery(insertQuery).catch((error) => {
              console.log(error);
              res.json({
                succeed: false,
                message: 'Nie udało się przesłać formularza',
                errors,
              });
            });
            console.log(result);
          }
        });

        // if encryption and db insert succeeds then this code is executed
        res.json({
          succeed: true,
          message: 'Rejestracja powiodła się',
          errors,
        });
      }
    } else if (errors.length > 0) {
      res.json({
        succeed: false,
        message: 'Rejestracja nie powiodła się, napraw zaistniałe błędy',
        errors,
      });
    }
  } else {
    res.status(403);
    res.end();
  }
};
