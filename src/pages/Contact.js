import React from 'react';

const Contact = () => (
  <>
    <h1>Skontaktuj się z nami</h1>
    <h3>
      Masz pomysł jak usprawnić działanie naszej strony? Chchaiłbyś zakupić nasz
      czujnik? Jeśli tak wypełnij formularz kontaktowy
    </h3>
    <form>
      <input type="text" placeholder="Adres e-mail" />
      <input type="text" placeholder="Temat" />
      <input type="textarea" placeholder="Treść" />
      <button type="submit">Wyślij</button>
    </form>
  </>
);

export default Contact;
