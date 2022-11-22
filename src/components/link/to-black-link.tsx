import cn from "../../lib/class-names"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import BaseLink from "./base-link"

export default function ToBlackLink({
  href,
  ariaLabel,
  className,
  children,
}: IUnderlineLinkProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(`color-ani text-blue-600 hover:text-gray-900`, className)}
    >
      {children}
    </BaseLink>
  )
}
