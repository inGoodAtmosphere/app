const sendMail = require('../../../api_modules/mailSender.js');
const ValidationError = require('../../../api_modules/classes/validationError.js');

export default async (req, res) => {
  if (req.method === 'POST') {
    // TODO update docs
    // TODO add isSuccessful to json response
    // TODO try domain with git clone
    // todo update json

    // validation shit here
    const errors = []; // array for errors

    // regex for checking if email is correct
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    // checking if email is set
    if (!req.body.email) {
      errors.push(
        new ValidationError(
          'Musisz wypełnić pole z twoim adresem email',
          'email',
        ),
      );
    } else if (!emailPattern.test(req.body.email)) {
      errors.push(new ValidationError('Niepoprawny adres email', 'email'));
    }

    // checking if name is set or is too short
    if (!req.body.name) {
      errors.push(
        new ValidationError('Musisz wypełnić pole z twoim imieniem', 'name'),
      );
    }
    if (req.body.name.length < 2) {
      errors.push(
        new ValidationError(
          'Twoje imię musi zawierać co najmniej 2 znaki',
          'name',
        ),
      );
    }
    // checking if content is set or is too short
    if (!req.body.content) {
      errors.push(
        new ValidationError('Treść wiadomości nie może być pusta', 'content'),
      );
    } else if (req.body.content.length < 10) {
      errors.push(
        new ValidationError('Tresć wiadomości jest zbyt krótka', 'content'),
      );
    }
    const subject = req.body.subject || 'brak tematu';
    if (errors.length === 0) {
      const recipient = 'ingoodatmosphere@gmail.com';
      // let recipient;
      const plainContent = `Od:${req.body.name} adres email: ${req.body.email} ${req.body.content}`;
      errors.concat(
        await sendMail(
          recipient,
          `Kontakt: ${subject}`,
          plainContent,
          `${req.body.name} do`,
        ).catch((error) => {
          console.log(error);
          res.status(500);
          res.end();
        }),
      );
    }
    if (errors.length > 0) {
      res.json({
        isSuccessful: false,
        message:
          'Nie mogliśmy wysłać twojej wiadomości, napraw zaistniałe błędy',
        errors,
      });
    } else {
      res.json({
        isSuccessful: true,
        message: 'Twój email został wysłany pomyślnie',
        errors,
      });
    }
  } else {
    res.status(403);
    res.end();
  }
};
