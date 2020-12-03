const api = process.env.REACT_APP_API

export const getGif = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=${api}`
  const res = await fetch(url)
  const { data } = await res.json()
  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs
}