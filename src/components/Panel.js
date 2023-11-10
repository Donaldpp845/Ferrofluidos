import React from 'react';
import { Link } from 'react-router-dom';
import './Panel.css';
import logo from '../assets/logo.png';
import { FaBook, FaHome, FaRocket } from 'react-icons/fa';




function Panel() {
  return (
    <nav className="panel">
      <div className="panel-logo">Ferrofluidos</div>
      <img src={logo} alt="Logo de Ferrofluidos" className="logo" />
      
      <ul className="panel-links">
  <li>
    <Link to="/" className="panel-link">
      <FaHome className="panel-icon" /> Inicio
    </Link>
  </li>
  <li>
    <Link to="/simulador1" className="panel-link">
      <FaRocket className="panel-icon" /> Simulador 1
    </Link>
  </li>
  <li>
    <Link to="/simulador2" className="panel-link">
      <FaRocket className="panel-icon" /> Simulador 2
    </Link>
  </li>
  <li>
    <Link to="/Examen" className="panel-link">
      <FaBook className="panel-icon" /> Examen
    </Link>
  </li>
</ul>

    </nav>
  );
}

export default Panel;
