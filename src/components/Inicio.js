import React from 'react';
import './Inicio.css'; // Asegúrate de que la ruta sea correcta
import animation2Image from '../assets/animation2.gif'; 
import animation3Image from '../assets/animation3.gif'; 
import animation1Image from '../assets/animation.gif'; 
import animation4Image from '../assets/aimagen1.jpg'; 
import animation5Image from '../assets/aimagen2.jpg'; 
import animation6Image from '../assets/aimagen3.jpg'; 



const Inicio = () => {
  return (
     <div>

      <div className="contenido">
        <h1 className="titulo11">Explora el Mundo del Electromagnetismo 🧲</h1>
      </div>
   
    <div className="imagenes-representativas">
   
        <div className="imagen-item">
          <img className='imgbody' src={animation2Image} alt="Imagen Representativa 1" />
          <h2 className="imagen-titulo">Campo Magnetico</h2>
          <p className="imagen-descripcion">Un campo magnético es la 
          representación matemática del modo en que las fuerzas magnéticas
           se distribuyen en el espacio que circunda a una fuente magnética.
            Esta fuente puede ser un imán, una carga en movimiento o una corriente 
            eléctrica
</p>
        </div>
        
        <div className="imagen-item">
       
          <img className='imgbody'  src={animation3Image} alt="Imagen Representativa 1" />
          <h2 className="imagen-titulo">Electroiman</h2>
          <p className="imagen-descripcion">Un electroimán es un imán que
           genera campos electromagnéticos a partir de una corriente eléctrica,
            este específicamente funciona con dos polos para optimizar la 
            generación de campos magnéticos uniformes en una región específica</p>
        </div>
        <div className="imagen-item">
          <img className='imgbody' src={animation1Image} alt="Imagen Representativa 1" />
          <h2 className="imagen-titulo">Ferrofluido</h2>
          <p className="imagen-descripcion">Un ferrofluido es una sustancia
           sintética formada por nanopartículas ferromagnéticas magnetizables
            basados en hierro cubiertas por una capa surfactante y disueltas
             en una solución orgánica u acuosa.</p>
          
        </div>
      </div>
<div className='contenedordetitulos'>
<h2 className='encabezadoini'>Historia de los Ferrofluidos</h2>
  <h2 className='titulosini'>1. ¿Quién fue el pionero en el desarrollo de los ferrofluidos?</h2>
   <p className='parrafoini'>Steve Papell, un científico que trabajaba en el Laboratorio Lewis
    de la NASA en Cleveland, Ohio, fue uno de los pioneros en el desarrollo de los ferrofluidos
     en la década de 1960. Papell buscaba una solución para mover combustible líquido en gravedad
      cero sin el uso de bombas mecánicas.</p>
</div>

<div className='contenedordetitulos'>
  <h2 className='titulosini'>2. ¿Cómo se originó la idea de los ferrofluidos?</h2>
   <p className='parrafoini'>La idea de los ferrofluidos se originó a raíz de un
    desafío planteado por el físico Richard P. Feynman en su famosa conferencia de
     1959 titulada "Hay mucho espacio en el fondo". En esta conferencia, Feynman
      planteó la pregunta de si era posible mover líquidos sin partes móviles,
       lo que inspiró a los científicos a investigar esta cuestión.</p>
</div>

<div className='contenedordetitulos'>
  <h2 className='titulosini'>3. ¿Qué son los ferrofluidos y cómo se componen?</h2>
   <p className='parrafoini'>Los ferrofluidos son líquidos que contienen diminutas
    partículas magnéticas, generalmente nanopartículas de óxido de hierro o magnetita,
     suspendidas en un líquido portador, que suele ser aceite o agua. Estas partículas
      magnéticas responden a los campos magnéticos y, cuando se aplican, generan patrones
       de respuesta interesantes en el líquido, como la formación de picos y crestas.</p>
</div>

<div className='contenedordetitulos'>
  <h2 className='titulosini'>4. ¿Cuál fue la primera aplicación importante de los ferrofluidos?</h2>
   <p className='parrafoini'>La primera aplicación importante de los ferrofluidos fue en sistemas
    de propulsión sin partes móviles para satélites y naves espaciales. Esto permitió la manipulación
     y el control de líquidos en entornos de microgravedad, lo que era esencial para la exploración espacial.</p>
</div>

<div className='contenedordetitulos'>
  <h2 className='titulosini'>5. ¿Cómo se utilizan los ferrofluidos en dispositivos de resonancia magnética (MRI)?</h2>
   <p className='parrafoini'>En dispositivos médicos de resonancia magnética, los ferrofluidos se utilizan como 
   agentes de contraste. Cuando se inyectan en el cuerpo humano, estos ferrofluidos se comportan de manera diferente
    en presencia de un campo magnético, lo que mejora la calidad de las imágenes de resonancia magnética al resaltar
     áreas específicas del cuerpo.</p>
</div>

<div className='contenedordetitulos'>
  <h2 className='titulosini'>6. ¿Cuáles son algunas aplicaciones emergentes de los ferrofluidos en la actualidad?</h2>
   <p className='parrafoini'>En la actualidad, los ferrofluidos encuentran aplicaciones en la robótica para la
    fabricación de articulaciones sin fricción, en la industria de la electrónica para enfriamiento
     de componentes, en la tecnología de pantalla plana para mejorar la eficiencia y en la ciencia 
     de materiales para la fabricación de materiales magnéticos avanzados.</p>
</div>


<div className='contenedordetitulos'>
  <h2 className='titulosini'>7. ¿Qué avances recientes se han logrado en la investigación de los ferrofluidos?</h2>
   <p className='parrafoini'>La investigación actual sobre ferrofluidos se centra en la optimización de sus
    propiedades, como la estabilidad térmica y la capacidad de respuesta magnética, así como en la creación
     de ferrofluidos personalizados para aplicaciones específicas, como la medicina y la nanotecnología.</p>
     <p className='parrafoini'>Esperamos que esta información adicional te sea útil para comprender mejor la historia
      y las aplicaciones de los ferrofluidos, no olvides testiar nuestro simuladores.</p>
</div>


      <footer className="footer">
        <div className='titleconteiner'>
        <h2 className='title1'>Autores del Proyecto</h2>
        </div>
        
      <div className="container-foter">
        <div className="footer-item">
          <img src={animation4Image} alt="Descripción de la imagen 1" />
          <h3>Deyanira Baez</h3>
        </div>
        <div className="footer-item">
          <img src={animation5Image} alt="Descripción de la imagen 2" />
          <h3>Deyvid Rivera</h3>
        </div>
        <div className="footer-item">
          <img src={animation6Image} alt="Descripción de la imagen 3" />
          <h3>Francis Centeno</h3>
        </div>
      </div>
    </footer>

    </div>

  );
}

export default Inicio;
