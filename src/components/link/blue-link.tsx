import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import BaseLink from './base-link'

export const BLUE_TEXT = 'text-blue-500'

interface IProps extends ILinkProps {
  underline?: boolean
}

const BlueLink = ({
  href,
  aria,
  underline = true,
  className,
  children,
}: IProps) => (
  <BaseLink
    href={href}
    aria={aria}
    underline={underline}
    className={cn(BLUE_TEXT, className)}
  >
    {children}
  </BaseLink>
)

export default BlueLink
