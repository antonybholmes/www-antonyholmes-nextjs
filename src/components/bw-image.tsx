import { useState } from "react"
import BaseImage, { IImageProps } from "./base-image"

interface ImageProps extends IImageProps {
  extZoom?: any
  colorMode?: boolean
}

export default function BWImage({
  src,
  extZoom,
  alt,
  className,
  colorMode = true,
  size = [640, 640],
  sizes = [],
  loading = "lazy",
  decoding = "async",
}: ImageProps) {
  const [hover, setHover] = useState(false)

  return (
    <BaseImage
      src={src}
      style={{
        filter: `grayscale(${colorMode && (extZoom || hover) ? "0" : "1"})`,
        transition: "all 0.3s ease-in-out",
      }}
      className={className}
      alt={alt}
      size={size}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
    />
  )
}
