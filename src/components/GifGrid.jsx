import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGif(category)
      .then(setImages)
  }, [category])

  return (
    <>
      <h3 className="categoryTitle">{category}</h3>
      <div className="card-grid">
        {
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
      <hr className="hr"/>
    </>
  )
}
