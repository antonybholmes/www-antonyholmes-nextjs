import type ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import ButtonLink from "./button-link"

export const BLUE_BUTTON_CLS = "bg-blue-600 hover:bg-gray-800 text-sm"

export default function BlueButtonLink({
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
      className={cn(BLUE_BUTTON_CLS, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </ButtonLink>
  )
}
