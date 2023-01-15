import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"

export default function WhiteLink({
  href,
  ariaLabel,
  underline = true,
  className,
  children,
}: ILinkProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("text-white", className)}
    >
      {children}
    </BaseLink>
  )
}
