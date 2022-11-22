import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import IndexLink from "./index-link"

export default function BlueIndexLink({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IUnderlineLinkProps) {
  return (
    <IndexLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("stroke-blue-500 text-blue-600", className)}
    >
      {children}
    </IndexLink>
  )
}
