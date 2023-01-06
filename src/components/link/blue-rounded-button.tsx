import cn from "../../lib/class-names"
import { BLUE_BUTTON_CLS } from "./blue-button-link"
import type { IButtonProps } from "./button"
import { COLOR_BUTTON_CLS } from "./color-button-link"
import RoundedButton from "./rounded-button"

export default function BlueRoundedButton({
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
      className={cn(COLOR_BUTTON_CLS, BLUE_BUTTON_CLS, className)}
      style={style}
    >
      {children}
    </RoundedButton>
  )
}

//font-bold bg-blue-600 hover:bg-blue-600 text-white shadow-md rounded px-5 py-3 trans-ani"
