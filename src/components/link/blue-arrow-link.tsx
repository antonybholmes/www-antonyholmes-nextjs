import ArrowLink from "./arrow-link"
import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"

const BlueArrowLink = ({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) => (
  <ArrowLink
    href={href}
    ariaLabel={ariaLabel}
    className={cn("text-blue-500", className)}
  >
    {children}
  </ArrowLink>
)

export default BlueArrowLink
