import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"

const UnderlineLink = ({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) => (
  <BaseLink
    href={href}
    ariaLabel={ariaLabel}
    underline={true}
    className={className}
  >
    {children}
  </BaseLink>
)

export default UnderlineLink
