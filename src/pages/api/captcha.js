require('dotenv').config();
const fetch = require('isomorphic-fetch');

export default (req, res) => {
  const secretKey = process.env.SECRET_KEY;
  const { token } = req.body;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  fetch(url, {
    method: 'post',
  })
    .then((response) => response.json())
    .then((googleResponse) => res.json({ googleResponse }))
    .catch((error) => res.json({ error }));
};
