import React, { useState, useEffect } from 'react';
import './Estudiante.css'; // Importa los estilos CSS locales al componente

const Estudiante = () => {
  const [bolitaPosition, setBolitaPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const vaso = document.querySelector('.vaso');
    const bolita = document.querySelector('.bolita');

    const updateBolitaPosition = (e) => {
      const vasoRect = vaso.getBoundingClientRect();
      const bolitaRect = bolita.getBoundingClientRect();

      let x = e.clientX - vasoRect.left - bolitaRect.width / 2;
      let y = e.clientY - vasoRect.top - bolitaRect.height / 2;

      // Limitar la posición de la bolita para que no salga del vaso
      x = Math.min(Math.max(x, 0), vasoRect.width - bolitaRect.width);
      y = Math.min(Math.max(y, 0), vasoRect.height - bolitaRect.height);

      setBolitaPosition({ x, y });
    };

    window.addEventListener('mousemove', updateBolitaPosition);

    return () => {
      window.removeEventListener('mousemove', updateBolitaPosition);
    };
  }, []);

  return (
    <div className="estudiante">
      <h1>Simulador de Estudiante</h1>
      <div className="vaso">
        <div className="agua">
          <div
            className="bolita"
            style={{ left: bolitaPosition.x + 'px', top: bolitaPosition.y + 'px' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Estudiante;
