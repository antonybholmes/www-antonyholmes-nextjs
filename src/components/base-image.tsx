import { CSSProperties } from "react"
import type IClassProps from "../interfaces/class-props"
import IImageProps from "../interfaces/image-props"
import { parse } from "../lib/path"

export interface IProps extends IImageProps, IClassProps {
  onLoad?: any
  pictureStyle?: CSSProperties
}

export function getSizes(size: [number, number]): [number, number][] {
  return [
    [size[0] / 4, size[1] / 4],
    [size[0] / 2, size[1] / 2],
    [size[0], size[1]],
  ] // size[0] / 8,
}

export function getSizeStr(size: [number, number]): string {
  return `(min-width: ${size[0]}px) ${size[0]}px, 100vw`
}

export function getSrcSet(src: string, sizes: [number, number][]): string {
  const p = parse(src)
  const dir = p.dir
  const name = p.name
  const ext = p.ext

  return sizes
    .map(s => `${dir}/opt/${name}-${s[0]}x${s[1]}.${ext} ${s[0]}w`)
    .join(", ")
}

export default function BaseImage({
  src,
  alt,
  size = [640, 320],
  sizes = [],
  loading = "lazy",
  decoding = "async",
  onLoad,
  className,
  style,
  pictureStyle,
}: IProps) {
  if (sizes.length === 0) {
    sizes = getSizes(size)
  }

  const srcset = getSrcSet(src, sizes)
  //const _sizes = sizes.map(s => `(min-width: ${s}px) ${s}px`).join(", ") //+ `, ${sizes[sizes.length - 1]}px`

  return (
    <picture style={pictureStyle}>
      <img
        // @ts-ignore
        ref={ref}
        // src={`${dir}/opt/${name}-${size[0]}x${size[1]}.${ext}`}
        srcSet={srcset}
        sizes={getSizeStr(size)}
        width={size[0]}
        height={size[1]}
        className={className}
        style={style}
        loading={loading}
        decoding={decoding}
        alt={alt}
        onLoad={onLoad}
      />
    </picture>
  )
}
