import { memo, useEffect, useState } from "react"
import { BLANK_PNG } from "../constants"
import IChildrenProps from "../interfaces/children-props"
import IImageProps from "../interfaces/image-props"
import cn from "../lib/class-names"
import { parse } from "../lib/path"
import { getSizes, getSizeStr, getSrc, getSrcSet } from "./base-image"

export interface IPlaceholderProps extends IChildrenProps {
  containerClassName?: string
  imgClassName?: string
}

interface IProps extends IImageProps, IPlaceholderProps {}

//based on ideas from https://blog.logrocket.com/progressive-image-loading-react-tutorial/#:~:text=With%20progressive%20image%20loading%2C%20the,images%20are%20coming%20up%20momentarily.

export default memo(function PlaceholderImage({
  src,
  alt,
  size = [640, 320],
  sizes = [],
  loading = "lazy",
  decoding = "async",
  className,
  containerClassName,
  imgClassName,
  style,
  children,
}: IProps) {
  const p = parse(src)
  const dir = p.dir
  const name = p.name
  const ext = p.ext

  if (sizes.length === 0) {
    sizes = getSizes(size)
  }

  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(BLANK_PNG)
  const [srcSet, setSrcSet] = useState(`${BLANK_PNG} ${size[0]}w`)

  useEffect(() => {
    // Based on https://codeburst.io/how-to-progressively-load-images-in-react-using-hooks-80c50fd447cd

    const s = getSrc(src, name, dir, ext, size)
    // start loading original image
    const imageToLoad = new Image()
    imageToLoad.src = s
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loaded to true
      setCurrentSrc(s)
      setSrcSet(getSrcSet(src, name, dir, ext, sizes))
      setIsLoaded(true)
    }
  }, [src])

  return (
    <div
      className={cn("relative overflow-hidden", className, containerClassName)}
    >
      <picture>
        <img
          src={currentSrc}
          srcSet={srcSet}
          sizes={getSizeStr(size)}
          width={size[0]}
          height={size[1]}
          className={cn(
            "w-full trans-ani-700 transition-placeholder",
            [isLoaded, "blur-none opacity-100", "blur-lg opacity-50"],
            className,
            imgClassName
          )}
          style={style}
          loading={loading}
          decoding={decoding}
          alt={alt}
        />
      </picture>

      {children && children}
    </div>
  )
})
