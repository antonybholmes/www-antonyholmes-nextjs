import cn from "../../lib/class-names"
import BaseButton, { IButtonProps } from "./base-button"
import { PILL_BUTTON_LINK_CLS } from "./pill-button-link"

export default function PillButton({
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
    <BaseButton
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ariaLabel={ariaLabel}
      className={cn(PILL_BUTTON_LINK_CLS, className)}
      style={style}
    >
      {children}
    </BaseButton>
  )
}

//font-bold bg-blue-600 hover:bg-blue-600 text-white shadow-md rounded px-5 py-3 trans-ani"
