import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import BaseLink from './base-link'

const BaseButtonLink = ({ href, aria, className, children }: ILinkProps) => (
  <BaseLink
    href={href}
    aria={aria}
    className={cn('inline-block animate-button', className)}
  >
    {children}
  </BaseLink>
)

export default BaseButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
