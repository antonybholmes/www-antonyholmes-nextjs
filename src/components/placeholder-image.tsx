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

  //const containerRef = useRef(null)
  //const imageRef = useRef(null)
  //const bgRef = useRef(null)

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

  // useEffect(() => {
  //   if (isLoaded) {
  //     // once loaded, fade the image in, whilst
  //     // also making the placeholder container
  //     // background transparent to prevent bleeding
  //     // at the corners. We use a slight delay to
  //     // affect the transparency so there is a more
  //     // seamless blend from background to image
  //     gsap
  //       .timeline()
  //       .set(containerRef.current, { background: "transparent" })
  //       .to(
  //         imageRef.current,
  //         {
  //           duration: DURATION_S,
  //           opacity: 1,

  //           ease: Power3.easeOut,
  //         },
  //         0
  //       )
  //     // .to(
  //     //   imageRef.current,
  //     //   {
  //     //     duration: DURATION_S,
  //     //     filter: "blur(0px)",
  //     //     ease: Power3.easeOut,
  //     //   },
  //     //   0
  //     // )
  //     //.to(
  //     //   bgRef.current,
  //     //   {
  //     //     duration: DURATION_S,
  //     //     opacity: 0,
  //     //     ease: Power3.easeOut,
  //     //   },
  //     // )
  //   }
  // }, [isLoaded])

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

  // useEffect(() => {
  //   // make sure the image src is added after the onload handler
  //   if (imageRef.current) {
  //     imageRef.current.src = getSrc(src, name, dir, ext, size) //src
  //   }
  // }, [src, imageRef])

  return (
    <div
      //ref={containerRef}
      // className={cn(
      //   "relative overflow-hidden", [!isLoaded, "bg-gradient-to-br from-blue-100 via-slate-100 to-yellow-50"],
      //   className,
      //   containerClassName
      // )}
      className={cn("relative overflow-hidden", className, containerClassName)}
    >
      {/* <div className={cn("relative h-full w-full")} style={{ gridArea: "1/1" }}> */}
      <picture>
        <img
          //ref={imageRef}
          src={currentSrc} //`${dir}/opt/${name}-${size[0]}x${size[1]}.${ext}`}
          srcSet={srcSet}
          sizes={getSizeStr(size)}
          width={size[0]}
          height={size[1]}
          className={cn(
            "w-full trans-ani-700 transition-placeholder",
            [isLoaded, "blur-none", "blur-lg"],
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
})
