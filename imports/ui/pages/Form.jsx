import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../Styles/Form.css';

export const Form = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de datos vacíos
    if (!nombre || !edad || !email) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    // Validación de tipo de datos
    if (isNaN(edad)) {
      alert('La edad debe ser un número.');
      return;
    }

    // Validación de longitud del nombre
    if (nombre.length > 50) {
      alert('El nombre no puede tener más de 50 caracteres.');
      return;
    }

    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('El email no tiene un formato válido.');
      return;
    }

    // Redirigir a la página con el nombre capturado
    navigate(`/Welcome/${nombre}`);
  };

  return (
    <section className="form-container">
      <h2>Formulario de Ejemplo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          maxLength="50"
          required
        />
        <br />
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          min="0"
          max="120"
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
