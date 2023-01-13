import cn from "../../lib/class-names"
import { BLUE_BUTTON_CLS } from "./blue-button-link"
import type { IButtonProps } from "./base-button"
import { COLOR_BUTTON_CLS } from "./color-button-link"
import PillButton from "./pill-button"

export default function BluePillButton({
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
    <PillButton
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
    </PillButton>
  )
}
