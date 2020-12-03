import React, { useState } from 'react'

export const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputValue.trim().length > 0) {
      setCategories(
        [inputValue,
        ...categories]
      )
      setInputValue('')
    } else {
      alert('La busqueda no debe ir vacia')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={ handleInputChange}
        placeholder="Busqueda..."

      />
    </form>
  )
}
