import { CSSProperties, memo } from "react"
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

export function getSrcSet(
  src: string,
  name: string,
  dir: string,
  ext: string = "avif",
  sizes: [number, number][]
): string {
  return sizes
    .map(s => `${dir}/opt/${name}-${s[0]}x${s[1]}.${ext} ${s[0]}w`)
    .join(", ")
}

export function getSrc(
  src: string,
  name: string,
  dir: string,
  ext: string = "avif",
  size: [number, number]
): string {
  return `${dir}/opt/${name}-${size[0]}x${size[1]}.${ext}`
}

export function getPlaceholderSrc(
  src: string,
  name: string,
  dir: string,
  ext: string = "avif"
): string {
  return `${dir}/opt/${name}-placeholder.${ext}`
}

export default memo(function BaseImage({
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

  const p = parse(src)
  const dir = p.dir
  const name = p.name
  const ext = p.ext

  const srcset = getSrcSet(src, name, dir, ext, sizes)
  //const _sizes = sizes.map(s => `(min-width: ${s}px) ${s}px`).join(", ") //+ `, ${sizes[sizes.length - 1]}px`

  return (
    <picture style={pictureStyle}>
      <img
        src={getSrc(src, name, dir, ext, size)}
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
})
