import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {
  // const handleAdd = () => {
  //   setCategories(['Hunter', ...categories])
  // }
  const [categories, setCategories] = useState(['Goku'])

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
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  );
}

export default GifApp;
