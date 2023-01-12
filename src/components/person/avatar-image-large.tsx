import AvatarImage, { IAvatarProps } from "./avatar-image"

export default function AvatarImageLarge({ author, className }: IAvatarProps) {
  return (
    <AvatarImage
      author={author}
      size={[640, 640]}
      className={className}
      loading="eager"
    />
  )
}
