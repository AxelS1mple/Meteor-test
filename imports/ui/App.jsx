import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Form } from './pages/Form';
import { WelcomeUser } from './pages/WelcomeUser';
import { Modulos } from './pages/Modulos';
import './Styles/App.css';

const pageTitles = {
  '/': 'Inicio',
  '/form': 'Formulario',
  '/about': 'Acerca de',
  '/contacto': 'Contacto',
  '/modulos': 'Módulos'
};

export const App = () => {
  const location = useLocation();
  const pageName = pageTitles[location.pathname] || 'Página Actual';

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header>
        <div className="header-content">
          <h1>Mi Aplicación</h1>
          {!menuOpen && ( // Oculta el botón cuando el menú está abierto
            <button className="menu-btn" onClick={toggleMenu}>
              ☰
            </button>
          )}
        </div>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/form" onClick={closeMenu}>Formulario</Link></li>
            <li><Link to="/about" onClick={closeMenu}>Acerca de</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
            <li><Link to="/modulos" onClick={closeMenu}>Módulos</Link></li>
          </ul>
          <button className="close-btn" onClick={closeMenu}>✖</button>
        </nav>
      </header>

      <main>
        <div className="breadcrumbs">
          <span>{pageName}</span>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/welcome/:userName" element={<WelcomeUser />} />
          <Route path="/modulos" element={<Modulos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 Mi Aplicación</p>
      </footer>
    </div>
  );
};

export const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);
