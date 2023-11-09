import React from "react";
import Formulario from "./Formulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import { useState } from "react";
import Tarea from "./Tarea";

function ListaDeTareas () { 
    
    const [tareas, setTareas] = useState([]);
      
    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
      };

      const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
      };

      const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>{
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
      };
    
      return (
              ///// lo que se ve aquí abajo son fragmentos lo que estos hacen es que no tienen estructura o sea no ocupan el lugar que lo hacen los divs pero si tienen funcionalidad

        <>
         <Formulario onSubmit={agregarTarea} />
         <div className="tareas-lista-contenedor">
           {
            tareas.map((tarea) =>
            <Tarea
            id={tarea.id}
            key={tarea.id}     //// la key es el elemento con el que react identifica los componentes   
            texto={tarea.texto}
            completada={tarea.completada} 
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea} />
            )
           }
            
         </div>       
        </>
    );
};

export default ListaDeTareas;