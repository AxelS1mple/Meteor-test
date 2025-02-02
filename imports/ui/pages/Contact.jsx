import React from 'react';

export const Contact = () => {
  console.log('Contact se está renderizando'); // Verifica en la consola
  return (
    <section>
      <h2>Contacto</h2>
      <p>Ponte en contacto con nosotros.</p>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};