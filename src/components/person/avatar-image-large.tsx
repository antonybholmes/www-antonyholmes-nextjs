import cn from "../../lib/class-names"
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
      imgClassName={cn("scale-102 hover:scale-105", imgClassName)}
      loading="eager"
    />
  )
}
