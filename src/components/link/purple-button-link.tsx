import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import PillButtonLink from "./pill-button-link"

export const BUTTON_CLASSES = "bg-purple-600 hover:bg-purple-700 text-white"

export default function PurpleButtonLink({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) {
  return (
    <PillButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(BUTTON_CLASSES, className)}
    >
      {children}
    </PillButtonLink>
  )
}
