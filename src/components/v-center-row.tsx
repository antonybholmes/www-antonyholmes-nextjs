import { KeyboardEventHandler } from "react"
import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import cn from "../lib/class-names"
import BaseRow from "./base-row"

interface IProps extends IChildrenProps, IMouseProps {
  tabIndex?: number
  onKeyDown?: KeyboardEventHandler
}

export default function VCenterRow({
  tabIndex,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  className,
  style,
  children,
}: IProps) {
  return (
    <BaseRow
      className={cn("items-center", className)}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseRow>
  )
}
