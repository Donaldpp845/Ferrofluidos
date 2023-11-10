import React from 'react';

function Docente() {
  return (
    <div style={styles.container}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdT6XP9ffxdJJhic8rdaJIfq3Aa7tBPfw_I3zJJDAjeTzSUWw/viewform"
        target="_blank" // Esto abre la URL en una nueva pestaña
        rel="noopener noreferrer" // Buena práctica para la seguridad
      >
        Abrir Formulario en Nueva Pestaña
      </a>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Ajustar la altura del contenedor según tus necesidades
  },
};

export default Docente;
