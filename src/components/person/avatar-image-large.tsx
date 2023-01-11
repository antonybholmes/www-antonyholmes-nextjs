import AvatarImage, { IAvatarProps } from "./avatar-image"

const AvatarImageLarge = ({ author, className }: IAvatarProps) => (
  <AvatarImage
    author={author}
    size={[640, 640]}
    className={className}
    lazy={false}
  />
)

export default AvatarImageLarge
