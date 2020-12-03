import React, { useEffect } from 'react'

export const GifGrid = ({category}) => {
  const api = process.env.REACT_APP_API

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
        url: img.images?.downsized_medium.url
      }
    })
    console.log(gifs)
  }

  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}
