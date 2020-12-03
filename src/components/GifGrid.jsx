import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
  const api = process.env.REACT_APP_API

  const [images, setImages] = useState([])

  useEffect(() => {
    getGif()
  }, [])

  const getGif = async () => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${api}`
    const res = await fetch(url)
    const { data } = await res.json()
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_large.url
      }
    })
    console.log(data)
    setImages(gifs)
  }

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
