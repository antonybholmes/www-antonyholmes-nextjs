import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"

interface IProps extends ILinkProps {
  underline?: boolean
}

export default function BlueLink({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("fill-blue-500 stroke-blue-500 text-blue-600", className)}
    >
      {children}
    </BaseLink>
  )
}
