// importar CSS: ruta del archivo
import "./App.css"

// importar un componente propio
// importar NOMBRE from RUTA
import Card from "./components/Card"
import CarouselLocal from "./components/Carousel"

// importar codigo de librerias
// nombre de la funcion from LIBRERIA
import { useState } from "react";
import { FaBeer } from 'react-icons/fa';

const App = () => {
  const [ mostrarModalPrincipal, setMostrarModalPrincipal ] = useState(false)
  const [ mostrarModalTerminos, setMostrarModalTerminos ] = useState(true)

  const handleClick = () => {
    setMostrarModalPrincipal(true)
  }

  const handleClickAbrirModalTerminos = () => {
    setMostrarModalTerminos(true)
  }

  const handleClickCerrarModal = () => {
    setMostrarModalPrincipal(false)
  }

  const handleClickCerrarModalTerminos = () => {
    setMostrarModalTerminos(false)
  }

  const gatos = [
    {
      nombre: "Gatito triste", 
      precio: 20000,
      descripcion: "Gato muy triste"
    }, {
      nombre: "Gatito muuuy triste", 
      precio: 39000,
      descripcion: "Gato muuuuy triste"
    }, {
      nombre: "Gatito algo feliz", 
      precio: 500000,
      descripcion: "Gato que esta algo feliz"
    }
  ]

  return (
    <div>




      <h1>Estado <FaBeer /> </h1>

   

<div className="container-tarjetas">

    {gatos.map(elemento => (
      <Card 
        nombre={elemento.nombre}
        precio={elemento.precio}
        descripcion={elemento.descripcion}
      />
    ))}

</div>

<CarouselLocal />

      <button onClick={handleClick}>Abrir Modal Principal</button>
      <button onClick={handleClickAbrirModalTerminos}>Abrir Modal Terminos</button>

      {mostrarModalPrincipal && 
        <article className="modal">
          <button onClick={handleClickCerrarModal}>X</button>
          <h2>Soy un modal</h2>
          <p>Esto es mucho texto adentro del modal</p>
        </article>
      }
      {mostrarModalTerminos && 
        <article className="modalTerminos">
          <button onClick={handleClickCerrarModalTerminos}>X</button>
          <h2>Acepta terminos y condiciones</h2>
          <p>Si, acepto</p>
        </article>
      }


    </div>
  )
}

export default App;
