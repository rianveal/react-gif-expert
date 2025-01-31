import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValueClear = inputValue.trim();
    if(inputValueClear.length <= 1 ) return; // Validando que el valor del campo no sea vacío
    // setCategories(cats => [...cats, inputValue]);
    onNewCategory(inputValueClear);
    setInputValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}
