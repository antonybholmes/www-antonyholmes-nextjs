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
        `trans-ani-300 fill-blue-600 text-blue-600 transition-colors hover:fill-slate-900 hover:text-slate-900`,
        className
      )}
    >
      {children}
    </BaseLink>
  )
}
