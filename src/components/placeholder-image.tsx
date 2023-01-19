import { gsap, Power3 } from "gsap"
import { useEffect, useRef, useState } from "react"
import IChildrenProps from "../interfaces/children-props"
import IImageProps from "../interfaces/image-props"
import cn from "../lib/class-names"
import { getSizes, getSizeStr, getSrcSet } from "./base-image"

const DURATION_S = 1

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
  //const bgRef = useRef(null)

  useEffect(() => {
    if (isLoaded) {
      // once loaded, fade the image in, whilst
      // also making the placeholder container
      // background transparent to prevent bleeding
      // at the corners. We use a slight delay to
      // affect the transparency so there is a more
      // seamless blend from background to image
      gsap
        .timeline()
        .set(containerRef.current, { background: "transparent" })
        .to(
          imageRef.current,
          {
            duration: DURATION_S,
            opacity: 1,

            ease: Power3.easeOut,
          },
          0
        )
        .to(
          imageRef.current,
          {
            duration: DURATION_S,
            filter: "blur(0px)",
            ease: Power3.easeOut,
          },
          0
        )
      //.to(
      //   bgRef.current,
      //   {
      //     duration: DURATION_S,
      //     opacity: 0,
      //     ease: Power3.easeOut,
      //   },
      // )
    }
  }, [isLoaded])

  // useEffect(() => {
  //   // @ts-ignore
  //   gsap.timeline()
  //   .set(
  //     imageRef.current,
  //     {
  //       filter: "blur(32px)",
  //     },
  //   ).to(
  //     imageRef.current,
  //     {
  //       duration: 0.4,
  //       delay: 0.1,
  //       filter: "blur(0px)",
  //     },
  //     0
  //   )
  // }, [])

  useEffect(() => {
    // make sure the image src is added after the onload handler
    if (imageRef.current) {
      imageRef.current.src = src
    }
  }, [src, imageRef])

  if (sizes.length === 0) {
    sizes = getSizes(size)
  }

  const srcset = getSrcSet(src, sizes)

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-blue-100 via-slate-100 to-yellow-50",
        className,
        containerClassName
      )}
    >
      {/* <div className={cn("relative h-full w-full")} style={{ gridArea: "1/1" }}> */}
      <picture>
        <img
          ref={imageRef}
          // src={`${dir}/opt/${name}-${size[0]}x${size[1]}.${ext}`}
          srcSet={srcset}
          sizes={getSizeStr(size)}
          width={size[0]}
          height={size[1]}
          className={cn("w-full opacity-0 blur-lg", className, imgClassName)}
          style={style}
          loading={loading}
          decoding={decoding}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
        />
      </picture>

      {children && children}
      {/* </div> */}

      {/* <div
        ref={bgRef}
        style={{ gridArea: "1/1" }}
        className={cn(
          "h-full w-full bg-gradient-to-br from-blue-100 to-yellow-50 via-slate-100"
        )}
      /> */}
    </div>
  )
}
