require('dotenv').config();
const fetch = require('isomorphic-fetch');

export default async (req, res) => {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  const token = req.body;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(url, {
      method: 'post',
    });
    const googleResponse = await response.json();
    res.json(googleResponse);
  } catch (error) {
    res.json({ error });
  }
};
