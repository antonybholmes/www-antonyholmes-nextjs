import AvatarImage, { IAvatarProps } from "./avatar-image"

export default function AvatarImageLarge({
  author,
  className,
  containerClassName,
  imgClassName,
}: IAvatarProps) {
  return (
    <AvatarImage
      author={author}
      size={[640, 640]}
      className={className}
      containerClassName={containerClassName}
      imgClassName={imgClassName}
      loading="eager"
    />
  )
}
