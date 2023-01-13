import cn from "../../lib/class-names"
import { IButtonProps } from "./base-button"
import Button from "./button"
import { ROUNDED_BUTTON_CLS } from "./rounded-button-link"

export default function RoundedButton({
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
    <Button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ariaLabel={ariaLabel}
      className={cn(ROUNDED_BUTTON_CLS, className)}
      style={style}
    >
      {children}
    </Button>
  )
}

//font-bold bg-blue-600 hover:bg-blue-600 text-white shadow-md rounded px-5 py-3 trans-ani"
