import { useState } from "react"
import useWindowResize from "./use-window-resize"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: -1,
    height: -1,
  })

  const handleResize = (e: { width: number; height: number }) => {
    setWindowSize({
      width: e.width,
      height: e.height,
    })
  }

  useWindowResize(handleResize)

  return windowSize
}

export default useWindowSize
