export default interface IImageProps {
  size?: number[]
  sizes?: [number, number][]
  decoding?: "sync" | "async" | "auto"
  loading?: "lazy" | "eager"
}
