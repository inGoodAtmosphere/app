// create reusable transporter object using the default SMTP transport
const nodemailer = require('nodemailer');
const ValidationError = require('./classes/validationError');
require('dotenv').config();

const testMail = process.env.MAIL_USER_TEST;
const productionMail = process.env.MAIL_USER_PRODUCTION;
const mail = process.env.NODE_ENV === 'production' ? productionMail : testMail;
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT, // SSL PORT
  secure: true,
  auth: {
    user: mail,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
const sendMail = async (recipient, subject, plainContent, prefix, suffix) =>
  new Promise((resolve, reject) => {
    // Data validation - if something wrong then it adds errors to array which is returned then
    // Unless every argument is set then the code will reject a promise or if the argument isnt that important then the code will assign a standard value to the argument
    const errors = []; // array for pushing validation errors to let user know whats wrong
    let fromPrefix; // created this because eslint is annoying as fuck
    let fromSuffix; // look line above, here as well

    // Checking if every argument is set
    if (!recipient) {
      const error = new Error(
        'Odbiorca nie został ustawiony, jeśli widzisz ten błąd daj nam znać ;)',
      ); // creating an error to reject a promise,pssst eslint is my best friend at using good practices
      reject(error);
    }
    if (!subject) {
      errors.push(
        new ValidationError('Musisz wpisać temat wiadomości', 'subject'),
      );
    }
    if (!plainContent) {
      errors.push(
        new ValidationError('Treść emaila nie może być pusta', 'content'),
      );
    }
    if (!prefix) {
      fromPrefix = '';
    } else {
      fromPrefix = `${prefix} `;
    }
    if (!suffix) {
      fromSuffix = '';
    } else {
      fromSuffix = ` ${suffix}`;
    }

    if (errors.length > 0) {
      resolve(errors);
    } else {
      // send mail with defined transport object
      transporter.sendMail(
        {
          from: `"${fromPrefix} InGoodAtmosphere ${fromSuffix}" <${mail}>`, // sender address
          to: recipient, // list of recipients
          subject, // Subject line
          text: `Treść: ${plainContent}`, // plain text body
          html: `<br><h2>treść:</h2><br>${plainContent.replace(/\n/g, '<br>')}`, // html body
        },
        (err) => {
          if (err) {
            reject(err);
          } else resolve(errors);
        },
      );
    }
  });

module.exports = sendMail;
