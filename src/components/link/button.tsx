import useMouseUpListener from "../../hooks/use-mouseup-listener"
import type IAriaProps from "../../interfaces/aria-props"
import type IChildrenProps from "../../interfaces/children-props"
import type IMouseProps from "../../interfaces/mouse-props"
import cn from "../../lib/class-names"
import { BUTTON_CLS } from "./button-link"

export interface IButtonProps extends IChildrenProps, IAriaProps, IMouseProps {}

export default function Button({
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  useMouseUpListener(onMouseUp)

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      aria-label={ariaLabel}
      className={cn(BUTTON_CLS, className)}
      style={style}
    >
      {children}
    </button>
  )
}
