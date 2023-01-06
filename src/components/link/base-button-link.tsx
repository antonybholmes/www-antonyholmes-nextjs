import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"

const BaseButtonLink = ({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) => (
  <BaseLink
    href={href}
    ariaLabel={ariaLabel}
    className={cn("animate-button inline-block", className)}
  >
    {children}
  </BaseLink>
)

export default BaseButtonLink

//font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
