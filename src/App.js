import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Panel from './components/Panel';
import Inicio from './components/Inicio';
import Simulador1 from './components/Simulador1';
import Simulador2 from './components/Simulador2';
import Examen from './components/Examen';
import Estudiante from './components/Estudiante';
import Docente from './components/Docente';


function App() {
  return (
    <Router>
      <div>
        <Panel />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/simulador1" element={<Simulador1 />} />
          <Route path="/simulador2" element={<Simulador2 />} />
          <Route path="/Examen" element={<Examen />} />
          <Route path="/estudiante" element={<Estudiante />} />
          <Route path="/docente" element={<Docente />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
