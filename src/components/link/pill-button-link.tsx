import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import ButtonLink, { BUTTON_CLASSES } from "./button-link"

export const PILL_BUTTON_CLASSES = `rounded-full overflow-hidden`

export default function PillButtonLink({
  href,
  ariaLabel,
  underline,
  className,
  children,
}: ILinkProps) {
  return (
    <ButtonLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn(BUTTON_CLASSES, PILL_BUTTON_CLASSES, className)}
    >
      {children}
    </ButtonLink>
  )
}

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
