import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import OutlineRoundedButtonLink from "./outline-rounded-button-link"

export const SECONDARY_BUTTON_CLASSES = "px-4 py-2 lg:text-sm border-gray-300"

export default function SecondaryButtonLink({
  href,
  ariaLabel,
  className,
  onHover,
  children,
}: ILinkProps) {
  return (
    <OutlineRoundedButtonLink
      href={href}
      ariaLabel={ariaLabel}
      onHover={onHover}
      className={cn(SECONDARY_BUTTON_CLASSES, className)}
    >
      {children}
    </OutlineRoundedButtonLink>
  )
}
