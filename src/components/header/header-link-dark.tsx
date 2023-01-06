import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"
import { ILinkProp, LINK_CLS } from "./header-link"

const HeaderLinkDark = ({ link, selected }: ILinkProp) => (
  <BaseLink
    href={link.url}
    ariaLabel={`View ${link.name}`}
    className={cn(LINK_CLS, "header-link-dark", [
      selected,
      "text-slate-50",
      "text-slate-400 hover:text-slate-50",
    ])}
  >
    {link.name}
  </BaseLink>
)

export default HeaderLinkDark
