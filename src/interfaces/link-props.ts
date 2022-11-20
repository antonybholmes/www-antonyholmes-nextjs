import IAriaProps from "./aria-props"
import IBaseLinkProps from "./base-link-props"
import IHoverProps from "./hover-props"
import IMouseProps from "./mouse-props"

export default interface ILinkProps
  extends IBaseLinkProps,
    IAriaProps,
    IMouseProps,
    IHoverProps {
  target?: string
}
