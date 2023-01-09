import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        //Si el if solo tiene una linea se puede poner asi (sin poner los {})
        //Comprueba que la nueva categoria no este ya dentro
        if(categories.includes(newCategory)) return;

        //Coge todas las categorias y añade la nueva
        setCategories([newCategory, ...categories ])
    }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory = {value => onAddCategory(value)}
        />
        
            { categories.map(category => {
                //Es importante que tengan una key
                return (

                    <GifGrid 
                        key={category} 
                        category={category}/>
                )
            })}
    </>
  )
}
