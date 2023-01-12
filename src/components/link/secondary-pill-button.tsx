import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import PillButtonLink from "./pill-button-link"

const SecondaryPillButtonLink = ({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) => (
  <PillButtonLink
    href={href}
    ariaLabel={ariaLabel}
    className={cn("bg-slate-200 hover:bg-slate-100", className)}
  >
    {children}
  </PillButtonLink>
)

export default SecondaryPillButtonLink

//font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
