import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import BaseLink from './base-link'
import { BUTTON_CLASSES } from './blue-button-link'

export const SECONDARY_BUTTON_CLASSES =
  'border border-solid border-gray-200  hover:bg-gray-100'

const SecondaryButtonLink = ({
  href,
  aria,
  className,
  children,
}: ILinkProps) => (
  <BaseLink
    href={href}
    aria={aria}
    className={cn(BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES, className)}
  >
    {children}
  </BaseLink>
)

export default SecondaryButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
