import { useState } from "react"
import { AddCategory, GifGrid } from "./components" 
// Importando los componentes desde el index.js, archivo de barril

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = ( newCategory ) => {
    if(categories.includes(newCategory)) return; // Validando que el valor del campo exista en la lista de categorías
    setCategories([newCategory, ...categories]);
    // setCategories(cats => [...cats, 'HunterXHunter']); // Otra forma de hacerlo
  };
  

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Search input */}
      <AddCategory onNewCategory={ event => onAddCategory(event) } /> 

      {/* GifGrid - Gif list */}

      {
        categories.map(category => (
          <GifGrid 
            key={category} 
            category={category} />
        ))
      }

      {/* <ol>
        {
          categories.map(category => (
            <li key={category}>{category}</li>
          ))
        }
      </ol>   */}
    </>
  )
}
