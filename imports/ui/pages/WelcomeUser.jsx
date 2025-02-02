import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const WelcomeUser = () => {
  const { userName } = useParams(); // Extraemos el nombre del usuario de la URL

  return (
    <section className="welcome-container">
      <h2>Bienvenido, {userName}!</h2>
      <p>Estamos encantados de tenerte aquí. ¿Qué te gustaría hacer ahora?</p>
      
      <div className="welcome-actions">
        <Link to="/" className="welcome-btn">Volver al Inicio</Link>
        <Link to="/form" className="welcome-btn">Ir al Formulario</Link>
        <Link to="/about" className="welcome-btn">Conocer más sobre nosotros</Link>
        <Link to="/contacto" className="welcome-btn">Contactar con nosotros</Link>
      </div>
    </section>
  );
};
