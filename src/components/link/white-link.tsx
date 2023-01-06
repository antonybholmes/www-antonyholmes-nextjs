import cn from "../../lib/class-names"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import BaseLink from "./base-link"

const WhiteLink = ({
  href,
  ariaLabel,
  className,
  underline,
  children,
}: IUnderlineLinkProps) => (
  <BaseLink
    href={href}
    ariaLabel={ariaLabel}
    className={cn("hover-link hover-link-white", className)}
    underline={underline}
  >
    {children}
  </BaseLink>
)

export default WhiteLink
