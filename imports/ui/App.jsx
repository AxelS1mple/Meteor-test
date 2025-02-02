import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Form } from './pages/Form';
import { WelcomeUser } from './pages/WelcomeUser';
import {Modulos} from './pages/Modulos';

// Definir las rutas y sus nombres en un objeto para mayor claridad y flexibilidad
const pageTitles = {
  '/': 'Inicio',
  '/form': 'Formulario',
  '/about': 'Acerca de',
  '/contacto': 'Contacto',
};

export const App = () => {
  const location = useLocation(); // Obtiene la ruta actual
  const pageName = pageTitles[location.pathname] || 'Página Actual'; // Obtiene el nombre de la página

  return (
    <div>
      <header>
        <h1>Bienvenido a Mi Aplicación</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/form">Formulario</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/Modulos">Modulos</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Muestra el nombre de la página actual */}
        <div className="breadcrumbs">
          <span>{pageName}</span>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/welcome/:userName" element={<WelcomeUser />} />
          <Route path='/modulos' element={<Modulos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 Mi Aplicación</p>
      </footer>
    </div>
  );
};

// Envuelve App con el Router
export const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);
