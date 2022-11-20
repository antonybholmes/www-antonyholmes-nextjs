import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import cn from "../lib/class-names"

interface IProps extends IChildrenProps, IMouseProps {
  center?: boolean
  tabIndex?: number
  tag?: string
}

export default function BaseCol({
  className = "",
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) {
  return (
    <div
      className={cn("flex flex-col", className)}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  )
}
