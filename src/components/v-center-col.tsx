import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import cn from "../lib/class-names"
import BaseCol from "./base-col"

interface IProps extends IChildrenProps, IMouseProps {
  center?: boolean
  tabIndex?: number
}

export default function VCenterCol({
  center = false,
  className = "",
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) {
  return (
    <BaseCol
      center={center}
      className={cn("justify-center", className)}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseCol>
  )
}
