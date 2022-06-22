import cn from '../../lib/class-names'
import IUnderlineLinkProps from '../../types/underline-link-props'
import BaseLink from './base-link'

const ToBlueLink = ({
  href,
  aria,
  className,
  underline = false,
  children,
}: IUnderlineLinkProps) => (
  <BaseLink
    href={href}
    aria={aria}
    underline={underline}
    className={cn(`hover:text-blue-600`, className)}
  >
    {children}
  </BaseLink>
)

export default ToBlueLink
