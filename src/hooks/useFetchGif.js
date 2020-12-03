import { useState } from "react"

export const useFetchGif = () => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  return state
}