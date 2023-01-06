import type IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import ArrowLink from "./arrow-link"

export interface IIndexLinkProps extends IUnderlineLinkProps {
  text: string
}

export default function BlueArrowLink({
  text,
  href,
  ariaLabel,
  underline = false,
  className,
}: IIndexLinkProps) {
  return (
    <ArrowLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("stroke-blue-600 text-blue-600", className)}
    >
      {text}
    </ArrowLink>
  )
}
