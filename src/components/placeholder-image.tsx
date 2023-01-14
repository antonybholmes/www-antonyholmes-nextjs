import { useState } from "react"
import type IClassProps from "../interfaces/class-props"
import IImageProps from "../interfaces/image-props"
import cn from "../lib/class-names"
import BaseImage from "./base-image"

export interface IProps extends IImageProps, IClassProps {
  containerClassName?: string
  imgClassName?: string
}

export default function PlaceholderImage({
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
}: IProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={cn(
        "grid h-full w-full grid-cols-1 grid-rows-1 ",
        className,
        containerClassName
      )}
    >
      {/* <div
        style={{ gridArea: "1/1" }}
        className={cn(
          "delay-1000 duration-1000 transition-opacity h-full w-full backdrop-blur",
          [isLoaded, "opacity-0"]
        )}
      /> */}

      <div
        className={cn("h-full w-full transition-opacity duration-500", [
          !isLoaded,
          "opacity-0",
        ])}
        style={{ gridArea: "1/1" }}
      >
        <BaseImage
          src={src}
          size={size}
          sizes={sizes}
          loading={loading}
          decoding={decoding}
          alt={alt}
          className={cn(className, imgClassName)}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  )
}
