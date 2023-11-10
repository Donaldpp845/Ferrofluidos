import React, { useState, useEffect } from 'react';
import './Estudiante.css';

const Estudiante = () => {
  const [bolitaPosition, setBolitaPosition] = useState({ x: 0, y: 0 });
  const [animada, setAnimada] = useState(false);

  useEffect(() => {
    const vaso = document.querySelector('.vaso');
    const bolita = document.querySelector('.bolita');

    const updateBolitaPosition = (e) => {
      const vasoRect = vaso.getBoundingClientRect();
      const bolitaRect = bolita.getBoundingClientRect();

      let x = e.clientX - vasoRect.left - bolitaRect.width / 2;
      let y = e.clientY - vasoRect.top - bolitaRect.height / 2;

      x = Math.min(Math.max(x, 0), vasoRect.width - bolitaRect.width);
      y = Math.min(Math.max(y, 0), vasoRect.height - bolitaRect.height);

      setBolitaPosition({ x, y });
    };

    window.addEventListener('mousemove', updateBolitaPosition);

    return () => {
      window.removeEventListener('mousemove', updateBolitaPosition);
    };
  }, [bolitaPosition]);

  const bolitaStyle = {
    left: bolitaPosition.x + 'px',
    top: bolitaPosition.y + 'px',
    backgroundImage: `url('../assets/Docente.png')`, // Ruta de la imagen corregida
  };

  return (
    <div className="estudiante">
      <h1>Simulador</h1>
      <div className="vaso">
        <div className="agua">
          <div
            className={`bolita ${animada ? 'animada' : ''}`}
            style={bolitaStyle}
          ></div>
          
        </div>
      </div>
    </div>
  );
};

export default Estudiante;
