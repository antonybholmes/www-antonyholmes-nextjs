import useMouseUpListener from "../../hooks/use-mouseup-listener"
import type IAriaProps from "../../interfaces/aria-props"
import type IChildrenProps from "../../interfaces/children-props"
import IFocusProps from "../../interfaces/focus-props"
import type IMouseProps from "../../interfaces/mouse-props"

export interface IButtonProps
  extends IChildrenProps,
    IAriaProps,
    IMouseProps,
    IFocusProps {
  isSelected: boolean
}

export default function BaseCheckBoxButton({
  isSelected,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onFocus,
  onBlur,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  useMouseUpListener(onMouseUp)

  return (
    <button
      role="checkbox"
      aria-checked={isSelected}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={ariaLabel}
      className={className}
      style={style}
    >
      {children}
    </button>
  )
}
