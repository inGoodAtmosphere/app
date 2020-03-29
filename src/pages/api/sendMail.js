const sendMail = require('../../../api_modules/mailSender.js');

export default async (req, res) => {
  if (req.method === 'POST') {
    // TODO CHECK if validation works
    // TODO CHECK why names doesnt appears on gmail
    // TODO to add captcha or something like this
    // TODO to add <br>s to emails
    // TODO translate to Polish
    // TODO apply regex
    // TODO update docs
    // TODO try domain with git clone

    // validation shit here
    const errors = []; // array for errors

    // checking if email is set
    if (!req.body.email) {
      errors.push('You must fill an email field');
    }
    // checking if name is set or is too short
    if (!req.body.name) {
      errors.push('You must fill your name field');
    }
    if (req.body.name.length < 2) {
      errors.push('Your name must be at least 2 characters long');
    }
    // checking if content is set or is too short
    if (!req.body.content) {
      errors.push('Message cannot be empty');
    } else if (req.body.content.length < 10) {
      errors.push('Message content too short');
    }
    const subject = req.body.subject || 'brak tematu';
    if (errors.length > 0) {
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
    console.log(errors);
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
