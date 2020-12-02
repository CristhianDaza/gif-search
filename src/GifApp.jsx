import React, { useState } from 'react';

const GifApp = () => {
  // const categories = ['Dragon Ball', 'Samurai X']
  const [categories, setCategories] = useState(['Dragon Ball', 'Samurai X'])
  const handleAdd = () => {
    setCategories(['Hunter', ...categories])
  }

  return (
    <>
      <h1>Gif Search ⚡</h1>
      <hr/>
      <input id="texto" type="text"/>
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {
          categories.map(categorie => {
            return <li key={categorie}>{categorie}</li>
          })
        }
      </ol>
    </>
  );
}

export default GifApp;
