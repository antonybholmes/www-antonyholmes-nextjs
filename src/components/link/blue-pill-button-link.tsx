import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import { BLUE_BUTTON_CLASSES } from './blue-button-link'
import PillButtonLink from './pill-button-link'

const BluePillButtonLink = ({
  href,
  aria,
  className,
  children,
}: ILinkProps) => (
  <PillButtonLink
    href={href}
    aria={aria}
    className={cn(BLUE_BUTTON_CLASSES, className)}
  >
    {children}
  </PillButtonLink>
)

export default BluePillButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
