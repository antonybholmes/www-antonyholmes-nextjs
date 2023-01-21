import type ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import OutlineRoundedButtonLink from "./outline-rounded-button-link"

export const SECONDARY_BUTTON_CLS =
  "border-slate-200 hover:border-slate-400 active:border-slate-400 active:bg-slate-100"

export default function SecondaryButtonLink({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) {
  return (
    <OutlineRoundedButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(SECONDARY_BUTTON_CLS, className)}
    >
      {children}
    </OutlineRoundedButtonLink>
  )
}
