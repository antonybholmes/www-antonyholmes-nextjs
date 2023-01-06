import cn from "../../lib/class-names"
import ArrowButtonLink from "./arrow-button-link"
import { BLUE_BUTTON_CLS } from "./blue-button-link"
import type { IIndexLinkProps } from "./blue-index-link"

export default function BlueButtonArrowLink({
  text,
  href,
  ariaLabel,
  className,
}: IIndexLinkProps) {
  return (
    <ArrowButtonLink
      href={href}
      className={cn(BLUE_BUTTON_CLS, className)}
      ariaLabel={ariaLabel}
    >
      {text}
    </ArrowButtonLink>
  )
}
