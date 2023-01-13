import cn from "../../lib/class-names"
import type { IButtonProps } from "./base-button"
import { OUTLINE_CLS } from "./outline-rounded-button-link"
import RoundedButton from "./rounded-button"

export default function OutlineRoundedButton({
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
  return (
    <RoundedButton
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ariaLabel={ariaLabel}
      className={cn(OUTLINE_CLS, className)}
      style={style}
    >
      {children}
    </RoundedButton>
  )
}

//font-bold bg-blue-600 hover:bg-blue-600 text-white shadow-md rounded px-5 py-3 trans-ani"
