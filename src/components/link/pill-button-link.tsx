import type ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import ButtonLink from "./button-link"

export const PILL_BUTTON_LINK_CLS = `rounded-full overflow-hidden`

export default function PillButtonLink({
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
      className={cn(PILL_BUTTON_LINK_CLS, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </ButtonLink>
  )
}

//font-bold bg-blue-600 hover:bg-blue-600 text-white shadow-md rounded px-5 py-3 trans-ani"
