import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
  const { data:images, loading } = useFetchGif(category)

  return (
    <>
      <h3 className="categoryTitle">{category}</h3>
      { loading && 
        <div className="contenedorLoader">
          <div className="lds-heart"><div></div></div>
        </div>
      }
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
