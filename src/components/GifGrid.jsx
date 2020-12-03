import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
// import { getGif } from '../helpers/getGifs'
// import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
  // const [images, setImages] = useState([])
  const { loading } = useFetchGif()

  // console.log(state)

  // useEffect(() => {
  //   getGif(category)
  //     .then(setImages)
  // }, [category])

  return (
    <>
      <h3 className="categoryTitle">{category}</h3>
      { loading ? 'Cargando...' : 'Data Cargada' }
      {/* <div className="card-grid">
        {
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div> */}
      <hr className="hr"/>
    </>
  )
}
