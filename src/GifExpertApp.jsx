//paso 2
import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //apunta automaticamente a index.js

export const GifExpertApp = () => {
  const [categories, setCategories] = useState( ["Dragon Ball"] );// se inicializa un array con un valor
  //el on... se agrega para definir eventos
  const onAddCategory = newCategory => {
      if(categories.includes(newCategory))  return;//si existe en la lista, no se agrega de nuevo

      setCategories([newCategory, ...categories]);//se agrega el nuevo item en el 1er lugar de la lista
  }

  return (
    <>
        <h1>GifExpertApp v2</h1>
        {/* paso 3-1: componenete con el input */}
        <AddCategory
            //addTheCategoy={setCategories}
            onNewCategory={ value => onAddCategory(value) }
         />
        {/*<button onClick={ onAddCategory }>Agregar</button> otra forma de hacerlo con un boton*/}

        {
          // paso 3-2: Listado de Gif: el "map" agrega cada elemento del array a un nuevo elemento del html, sin usar foreach
          categories.map( cat => (
              <GifGrid key={ cat }
                       category={ cat }
              />
          ))
        }
    </>
  )
}