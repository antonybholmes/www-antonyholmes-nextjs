import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"

export const BASE_BUTTON_CLASSES =
  "flex flex-row items-center justify-center font-medium text-sm"

export const BUTTON_CLASSES = `${BASE_BUTTON_CLASSES} color-ani`

export default function ButtonLink({
  href,
  ariaLabel,
  underline,
  onHover,
  className,
  children,
}: ILinkProps) {
  return (
    <BaseLink
      href={href}
      underline={underline}
      ariaLabel={ariaLabel}
      onHover={onHover}
      className={cn(BUTTON_CLASSES, className)}
    >
      {children}
    </BaseLink>
  )
}

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
