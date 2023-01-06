import IChildrenProps from "../interfaces/children-props"
import IMouseProps from "../interfaces/mouse-props"
import cn from "../lib/class-names"

interface IProps extends IChildrenProps, IMouseProps {
  center?: boolean
  tabIndex?: number
  tag?: string
}

const BaseCol = ({
  tag = "div",
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) => {
  switch (tag) {
    case "section":
      return (
        <section
          className={cn("flex flex-col", className)}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          tabIndex={tabIndex}
        >
          {children}
        </section>
      )
    case "ul":
      return (
        <ul
          className={cn("flex flex-col", className)}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          tabIndex={tabIndex}
        >
          {children}
        </ul>
      )
    default:
      return (
        <div
          className={cn("flex flex-col", className)}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          tabIndex={tabIndex}
        >
          {children}
        </div>
      )
  }
}

export default BaseCol
