import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifApp = () => {
  // const handleAdd = () => {
  //   setCategories(['Hunter', ...categories])
  // }
  const [categories, setCategories] = useState(['Dragon Ball', 'Samurai X'])

  return (
    <>
      <h1>Gif Search ⚡</h1>
      <AddCategory
        setCategories={setCategories}
        categories={categories}
      />
      <hr/>
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
