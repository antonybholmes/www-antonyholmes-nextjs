import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"

export default function WhiteLink({
  href,
  ariaLabel,
  className,
  underline = true,
  children,
}: IUnderlineLinkProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn("text-white", className)}
      underline={underline}
    >
      {children}
    </BaseLink>
  )
}
