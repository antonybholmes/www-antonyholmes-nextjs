import cn from "../../lib/class-names"
import { ROUNDED_BUTTON_CLASSES } from "./rounded-button-link"
import Button, { IButtonProps } from "./button"

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
      className={cn(ROUNDED_BUTTON_CLASSES, className)}
      style={style}
    >
      {children}
    </Button>
  )
}

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
