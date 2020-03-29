const sendMail = require('../../../api_modules/mailSender.js');

export default async (req, res) => {
  if (req.method === 'POST') {
    // TODO translate to Polish
    // TODO apply regex
    // TODO update docs

    // validation shit here
    const errors = [];
    if (!req.body.email) {
      errors.push('You must fill an email field');
    }
    if (!req.body.name) {
      errors.push('You must fill your name field');
    }
    if (!req.body.content) {
      errors.push('Message cannot be empty');
    } else if (req.body.content.length < 10) {
      errors.push('Message content too short');
    }
    const subject = req.body.subject || 'brak tematu';

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
    console.log(errors);
    if (!errors) {
      res.json({
        message: 'Napotkaliśmy jakiś problem, spróbuj ponownie później',
      });
    } else {
      res.json({ message: 'Twój email został wysłany pomyślnie', errors });
    }
  } else {
    res.status(403);
    res.end();
  }
};
