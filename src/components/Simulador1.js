import React from 'react';

function Simulador1() {
  return (
    <div style={styles.container}>
     
      <iframe
        src="https://phet.colorado.edu/sims/cheerpj/faraday/latest/faraday.html?simulation=magnets-and-electromagnets&locale=es"
        title="Simulador 1"
        style={styles.iframe}
      ></iframe>
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
  iframe: {
    width: '70%', // Ajustar el ancho del iframe según tus necesidades
    height: '70vh', // Ajustar la altura del iframe según tus necesidades
    border: 'none',
  },
};

export default Simulador1;
