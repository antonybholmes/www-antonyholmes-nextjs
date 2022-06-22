import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import PillButtonLink from './pill-button-link'

const RoundButtonLink = ({ href, aria, className, children }: ILinkProps) => (
  <PillButtonLink
    href={href}
    aria={aria}
    className={cn('flex flex-row items-center justify-center', className)}
  >
    {children}
  </PillButtonLink>
)

export default RoundButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
