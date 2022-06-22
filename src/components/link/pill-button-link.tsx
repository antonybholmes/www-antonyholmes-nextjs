import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import ButtonLink from './button-link'

const PillButtonLink = ({ href, aria, className, children }: ILinkProps) => (
  <ButtonLink href={href} aria={aria} className={cn('rounded-full', className)}>
    {children}
  </ButtonLink>
)

export default PillButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
