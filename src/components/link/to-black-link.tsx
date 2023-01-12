import cn from "../../lib/class-names"
import type IUnderlineLinkProps from "../../interfaces/underline-link-props"
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
      className={cn(
        `transition-ani fill-blue-600 text-blue-600 transition-colors hover:fill-gray-900 hover:text-gray-900`,
        className
      )}
    >
      {children}
    </BaseLink>
  )
}
