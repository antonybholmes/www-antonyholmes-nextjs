import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"

export const BLUE_TEXT = "text-blue-600"

export default function BlueLink({
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
      className={cn(BLUE_TEXT, className)}
    >
      {children}
    </BaseLink>
  )
}
