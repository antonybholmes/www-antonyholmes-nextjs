import type ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import ButtonLink from "./button-link"

export const COLOR_BUTTON_CLS = "text-white stroke-white"

export default function ColorPillButtonLink({
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
      className={cn(COLOR_BUTTON_CLS, className)}
      underline={underline}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </ButtonLink>
  )
}
