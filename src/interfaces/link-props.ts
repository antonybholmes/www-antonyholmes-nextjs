import type IAriaProps from "./aria-props"
import type IBaseLinkProps from "./base-link-props"
import type IHoverProps from "./hover-props"
import type IMouseProps from "./mouse-props"

export default interface ILinkProps
  extends IBaseLinkProps,
    IAriaProps,
    IMouseProps,
    IHoverProps {
  target?: string
}
