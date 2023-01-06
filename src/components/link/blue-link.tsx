import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"

export const BLUE_TEXT = "text-blue-600"

interface IProps extends ILinkProps {
  underline?: boolean
}

const BlueLink = ({
  href,
  ariaLabel,
  underline = true,
  className,
  children,
}: IProps) => (
  <BaseLink
    href={href}
    ariaLabel={ariaLabel}
    underline={underline}
    className={cn(BLUE_TEXT, className)}
  >
    {children}
  </BaseLink>
)

export default BlueLink
