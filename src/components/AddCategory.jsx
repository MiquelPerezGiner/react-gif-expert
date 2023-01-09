import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {

        setInputValue(target.value);
    }

    const onSumit = (event) => {
        event.preventDefault();

        //Si no tiene minimo una letra, no va. Sin contar espacios
        if(inputValue.trim().length <=1) return;

        //setCategories( categories => [inputValue, ...categories ]);

        //Para volver a ponerlo en blanco al acabar
        setInputValue('');

        //Quita los espacios antes de poner la nueva categoria
        onNewCategory(inputValue.trim());
    }

  return (
    <form onSubmit={ onSumit }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
