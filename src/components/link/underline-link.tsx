import ILinkProps from '../../types/link-props'
import BaseLink from './base-link'

const UnderlineLink = ({ href, aria, className, children }: ILinkProps) => (
  <BaseLink href={href} aria={aria} underline={true} className={className}>
    {children}
  </BaseLink>
)

export default UnderlineLink
