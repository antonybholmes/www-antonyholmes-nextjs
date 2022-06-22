import ArrowLink from './arrow-link'
import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'

const BlueArrowLink = ({ href, aria, className, children }: ILinkProps) => (
  <ArrowLink href={href} aria={aria} className={cn('text-blue-500', className)}>
    {children}
  </ArrowLink>
)

export default BlueArrowLink
