//paso 3-1
import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) =>{
        setInputValue( target.value );//guarda lo q se escribe
    };

    const sendForm = (event) => {
        event.preventDefault();//previene el refresco de pantalla
        if(inputValue.trim().length <= 1)   return;//tiene q tener 2 caracteres para ingresar

        //onNewCategory(categories => [inputValue, ...categories]); // se podia agregar el item aca
        setInputValue("");// se recetea el input
        onNewCategory( inputValue.trim() );//se envia al evento el valor a guardar
    }

    return (
        <form onSubmit={ sendForm }> {/*de otra forma se pasa el evento con un parametro: (event) => sendForm(event)*/}
            <input  type="text"
                    placeholder="Buscar gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
            />
        </form>
    )
}
