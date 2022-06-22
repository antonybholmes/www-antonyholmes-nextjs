import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import IndexLink from './index-link'

const BlueIndexLink = ({ href, aria, className, children }: ILinkProps) => (
  <IndexLink href={href} aria={aria} className={cn('text-blue-400', className)}>
    {children}
  </IndexLink>
)

export default BlueIndexLink
