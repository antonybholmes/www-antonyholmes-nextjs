import type IClassProps from "../interfaces/class-props"
import IImageProps from "../interfaces/image-props"
import { parse } from "../lib/path"

export interface IProps extends IImageProps, IClassProps {
  src: string
  alt: string
}

export default function BaseImage({
  src,
  alt,
  size = [640, 320],
  sizes = [],
  loading = "lazy",
  decoding = "async",
  className,
  style,
}: IProps) {
  if (sizes.length === 0) {
    sizes = [
      [size[0] / 4, size[1] / 4],
      [size[0] / 2, size[1] / 2],
      [size[0], size[1]],
    ] // size[0] / 8,
  }

  const p = parse(src)
  const dir = p.dir
  const name = p.name
  const ext = p.ext

  const srcset = sizes
    .map(s => `${dir}/opt/${name}-${s[0]}x${s[1]}.${ext} ${s[0]}w`)
    .join(", ")

  //const _sizes = sizes.map(s => `(min-width: ${s}px) ${s}px`).join(", ") //+ `, ${sizes[sizes.length - 1]}px`

  return (
    <picture>
      <img
        src={`${dir}/opt/${name}-${size[0]}x${size[1]}.${ext}`}
        srcSet={srcset}
        sizes={`(min-width: ${size[0]}px) ${size[0]}px, 100vw`}
        width={size[0]}
        height={size[1]}
        className={className}
        style={style}
        loading={loading}
        decoding={decoding}
        alt={alt}
      />
    </picture>
  )
}
