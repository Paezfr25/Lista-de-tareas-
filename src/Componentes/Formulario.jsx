import React from "react";
import '../hojas-de-estilo/Formulario.css';
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'; //// esto se debe llamar luego de instalarse 


function Formulario (props) {

const [input, setInput] = useState('');

  const manejarCambio = e => {
      setInput(e.target.value);
      

  };

  const manejarEnvio = e => {
      e.preventDefault(); //// lo que esto hace es que nos permite que no se vuelva acargar la pagina cuando enviamos el formulario 
      

      const tareaNueva = {
        id: uuidv4(),   //// esta funcion se tiene que instalar mediante la consola y llamar mediente el importacion
        texto: input,
        completada: false
      }
      props.onSubmit(tareaNueva);
  };

    return (
      <form className="tarea-formulario"
      onSubmit={manejarEnvio}>
        <input 
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
        />
        <button className="tarea-boton">
            Agregar Tarea 
            </button>
      </form>
    );
};

export default Formulario;