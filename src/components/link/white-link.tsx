import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import BaseLink from './base-link'

const WhiteLink = ({ href, aria, className, children }: ILinkProps) => (
  <BaseLink href={href} aria={aria} className={cn('text-white', className)}>
    {children}
  </BaseLink>
)

export default WhiteLink
