import { useState } from "react"
import IChildrenProps from "../../interfaces/children-props"
import cn from "../../lib/class-names"
import CheckMark from "./check-mark"

export interface ICheckBoxProps extends IChildrenProps {
  isSelected: boolean
  onClick: (selected: boolean) => void
}

export default function CheckBox({
  isSelected = false,
  onClick,
  className,
  children,
}: ICheckBoxProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  return (
    <button
      onClick={() => onClick(!isSelected)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        `flex cursor-pointer flex-row items-center gap-x-2`,
        className
      )}
    >
      <CheckMark selected={isSelected} hover={hover} />

      <div className="grow">{children}</div>
    </button>
  )
}
