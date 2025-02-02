import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link

export const NotFound = () => {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link> {/* Usa Link aquí */}
    </div>
  );
};