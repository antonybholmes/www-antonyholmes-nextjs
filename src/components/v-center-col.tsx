import { KeyboardEventHandler } from "react"
import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import cn from "../lib/class-names"
import BaseCol from "./base-col"

interface IProps extends IChildrenProps, IMouseProps {
  tabIndex?: number
  onKeyDown?: KeyboardEventHandler
}

export default function VCenterCol({
  className,
  style,
  tabIndex,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) {
  return (
    <BaseCol
      className={cn("justify-center", className)}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseCol>
  )
}
