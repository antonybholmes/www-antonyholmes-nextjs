import type ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import RoundedButtonLink from "./rounded-button-link"

export const OUTLINE_CLS = "border"

export default function OutlineRoundedButtonLink({
  href,
  ariaLabel,
  className,
  style,
  children,
}: ILinkProps) {
  return (
    <RoundedButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(OUTLINE_CLS, className)}
      style={style}
    >
      {children}
    </RoundedButtonLink>
  )
}

//font-bold bg-blue-600 hover:bg-blue-600 text-white shadow-md rounded px-5 py-3 trans-ani"
