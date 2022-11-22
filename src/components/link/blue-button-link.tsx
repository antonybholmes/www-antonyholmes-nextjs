import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import RoundedButtonLink from "./rounded-button-link"

export const BLUE_BUTTON_CLASSES =
  "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm"

export default function BlueButtonLink({
  href,
  ariaLabel,
  underline,
  className,
  children,
}: ILinkProps) {
  return (
    <RoundedButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(BLUE_BUTTON_CLASSES, className)}
      underline={underline}
    >
      {children}
    </RoundedButtonLink>
  )
}
