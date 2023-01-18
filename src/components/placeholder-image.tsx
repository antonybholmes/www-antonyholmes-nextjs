import { useEffect, useRef, useState } from "react"
import type IClassProps from "../interfaces/class-props"
import IImageProps from "../interfaces/image-props"
import cn from "../lib/class-names"
import BaseImage from "./base-image"
import { gsap } from "gsap"
import IChildrenProps from "../interfaces/children-props"

export interface IPlaceholderProps extends IChildrenProps {
  containerClassName?: string
  imgClassName?: string
}

interface IProps extends IImageProps, IPlaceholderProps {}

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
  children,
}: IProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const containerRef = useRef(null)
  const imageRef = useRef(null)

  // useEffect(() => {
  //   // @ts-ignore
  //   gsap.timeline().from(
  //     containerRef.current,
  //     {
  //       duration: 0.8,
  //       opacity: 0,
  //     },
  //     0
  //   )
  // }, [])

  useEffect(() => {
    // @ts-ignore
    gsap.timeline().from(
      imageRef.current,
      {
        duration: 1,
        filter: "blur(10px)",
      },
      0
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className, containerClassName)}
    >
      {/* <div
        style={{ gridArea: "1/1" }}
        className={cn(
          "delay-1000 duration-1000 transition-opacity h-full w-full backdrop-blur",
          [isLoaded, "opacity-0"]
        )}
      /> */}

      {/* <div ref={ref1}
        className={cn("h-full w-full"
        )}
        style={{ gridArea: "1/1" }}
      > */}
      <BaseImage
        ref={imageRef}
        src={src}
        size={size}
        sizes={sizes}
        loading={loading}
        decoding={decoding}
        alt={alt}
        className={cn("w-full", className, imgClassName)}
        style={style}
        onLoad={() => setIsLoaded(true)}
      />

      {children && children}
    </div>
  )
}
