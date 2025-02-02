import React from 'react';
import '../Styles/Home.css';  // Asegúrate de que la ruta sea correcta

export const Home = () => { 
  return (
    <section className="home-container">
      <div className="home-content">
        <h2 className="home-title">Bienvenido a la página de Inicio</h2>
        <p className="home-description">Esta es la página principal de la aplicación, donde podrás encontrar toda la información relevante y acceder a las secciones principales.</p>

        <div className="about-section">
          <h3 className="about-title">Sobre Nosotros</h3>
          <p className="about-description">Somos una empresa dedicada a ofrecer los mejores productos y servicios. Nos encanta innovar y mejorar continuamente para ti.</p>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">¿Quieres saber más?</h3>
          <p className="cta-description">Haz clic en el siguiente botón para conocer más sobre nuestros productos y servicios.</p>
          <button className="cta-button">Explorar</button>
        </div>
      </div>
    </section>
  );
};
