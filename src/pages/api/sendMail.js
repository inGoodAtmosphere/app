const sendMail = require('../../../api_modules/mailSender.js');
const ValidationError = require('../../../api_modules/validationError.js');

export default async (req, res) => {
  if (req.method === 'POST') {
    // TODO to add <br>s to emails
    // TODO apply regex
    // TODO update docs
    // TODO try domain with git clone

    // validation shit here
    const errors = []; // array for errors

    // checking if email is set
    if (!req.body.email) {
      errors.push(
        new ValidationError(
          'Musisz wypełnić pole z twoim adresem email',
          'email',
        ),
      );
    }
    const pattern = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$)/;
    if (pattern.test(req.body.email)) {
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
        message:
          'Nie mogliśmy wysłać twojej wiadomości, napraw zaistniałe błędy',
        errors,
      });
    } else {
      res.json({ message: 'Twój email został wysłany pomyślnie', errors });
    }
  } else {
    res.status(403);
    res.end();
  }
};
