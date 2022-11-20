import cn from "../../lib/class-names"
import Button, { IButtonProps } from "./button"
import { BUTTON_CLASSES } from "./button-link"
import { PILL_BUTTON_CLASSES } from "./pill-button-link"

export default function PillButton({
  onClick,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  return (
    <Button
      onClick={onClick}
      ariaLabel={ariaLabel}
      className={cn(BUTTON_CLASSES, PILL_BUTTON_CLASSES, className)}
      style={style}
    >
      {children}
    </Button>
  )
}

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
