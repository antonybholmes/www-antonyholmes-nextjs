import { SITE_DOMAIN } from '../constants'
import cn from '../lib/class-names'

interface IProps {
  className?: string
}

const Logo = ({ className }: IProps) => (
  <h1
    className={cn(
      'inline-block font-bold bg-gradient-to-r from-blue-700 to-teal-300 bg-clip-text text-transparent text-xl',
      className
    )}
  >
    {SITE_DOMAIN}
  </h1>
)

export default Logo
