import React from 'react';
import { Link } from 'react-router-dom';
import './Examen.css'; // Importa tu archivo de estilos personalizados
import estudianteImage from '../assets/Estudiante.png'; 
import docenteImage from '../assets/Docente.png';  // Importa la imagen de docente

const abrirURL = () => {
  const url = "https://docs.google.com/forms/d/e/1FAIpQLSdT6XP9ffxdJJhic8rdaJIfq3Aa7tBPfw_I3zJJDAjeTzSUWw/viewform";
  window.open(url, "_blank"); // Abre la URL en una nueva pestaña o ventana
};

const abrirURLE = () => {
  const url = "https://docs.google.com/forms/d/e/1FAIpQLSe3CwT7_8jPVmSo70yqCDkglMBbH9z533n2g-mVM5BZ9jyqcg/viewform";
  window.open(url, "_blank"); // Abre la URL en una nueva pestaña o ventana
};


const Examen = () => {
    return (
      <div className="exam-container">
        <h2 className='title-exa'>Examenes</h2>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={estudianteImage} alt="Estudiante" className="exam-image" />
            <Link to="/Examen" className="custom-button" onClick={abrirURLE}>
              Soy Estudiante
            </Link>
          </div>
          <div className="image-wrapper">
            <img src={docenteImage} alt="Docente" className="exam-image" />
            <Link to="/Examen" className="custom-button" onClick={abrirURL}>
              Soy Docente
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Examen;