import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import PillButtonLink from './pill-button-link'

const SecondaryPillButtonLink = ({
  href,
  aria,
  className,
  children,
}: ILinkProps) => (
  <PillButtonLink
    href={href}
    aria={aria}
    className={cn(
      'border border-solid border-gray-200 hover:bg-gray-100',
      className
    )}
  >
    {children}
  </PillButtonLink>
)

export default SecondaryPillButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
