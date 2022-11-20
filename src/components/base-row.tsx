import { KeyboardEventHandler } from "react"
import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import cn from "../lib/class-names"

interface IProps extends IChildrenProps, IMouseProps {
  onKeyDown?: KeyboardEventHandler
  tabIndex?: number
}

export default function BaseRow({
  className,
  style,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) {
  return (
    <div
      className={cn("flex flex-row", className)}
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  )
}
