import IImageLoadProps from "./image-load-props"

export default interface IImageSizeProps extends IImageLoadProps {
  size?: number[]
  sizes?: [number, number][]
}
