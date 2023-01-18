import IImageLoadProps from "./image-load-props"

export default interface IImageSizeProps extends IImageLoadProps {
  size?: [number, number]
  sizes?: [number, number][]
}
