import { IMAGEKIT_URL } from '../constants'
import cn from '../lib/class-names'

interface IProps {
  src: string
  alt: string
  size?: number[]
  root?: string
  className?: string
}

const BaseSvg = ({
  src,
  alt,
  size = [640, 360],
  root = '/blog',
  className,
}: IProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`${IMAGEKIT_URL}${root}/${src}`}
    width={size[0]}
    height={size[1]}
    className={cn('overflow-hidden', className)}
    alt={alt}
    loading="lazy"
    decoding="async"
  />
)

export default BaseSvg
