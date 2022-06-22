import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import BaseButtonLink from './base-button-link'

const ButtonLink = ({ href, aria, className, children }: ILinkProps) => (
  <BaseButtonLink
    href={href}
    aria={aria}
    className={cn('inline-block text-center', className)}
  >
    {children}
  </BaseButtonLink>
)

export default ButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
