import type ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"

export const BUTTON_CLS = `flex flex-row items-center justify-center  text-sm transition-ani transition-colors`

export default function ButtonLink({
  href,
  ariaLabel,
  underline,
  onMouseEnter,
  onMouseLeave,
  className,
  children,
}: ILinkProps) {
  return (
    <BaseLink
      href={href}
      underline={underline}
      ariaLabel={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(BUTTON_CLS, className)}
    >
      {children}
    </BaseLink>
  )
}

//font-bold bg-blue-600 hover:bg-blue-600 text-white shadow-md rounded px-5 py-3 trans-ani"
