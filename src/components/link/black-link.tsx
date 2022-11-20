import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"

interface IProps extends ILinkProps {
  underline?: boolean
}

export default function BlackLink({
  href,
  ariaLabel,
  underline = true,
  className,
  children,
}: IProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={className}
    >
      {children}
    </BaseLink>
  )
}
