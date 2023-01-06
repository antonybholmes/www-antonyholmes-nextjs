import type ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import ButtonLink from "./button-link"

export const ROUNDED_BUTTON_CLS = `rounded-md overflow-hidden`

export default function RoundedButtonLink({
  href,
  ariaLabel,
  underline,
  onMouseEnter,
  onMouseLeave,
  className,
  children,
}: ILinkProps) {
  return (
    <ButtonLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(ROUNDED_BUTTON_CLS, className)}
    >
      {children}
    </ButtonLink>
  )
}

//font-bold bg-blue-600 hover:bg-blue-600 text-white shadow-md rounded px-5 py-3 trans-ani"
