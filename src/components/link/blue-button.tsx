import cn from "../../lib/class-names"
import { BLUE_BUTTON_CLASSES } from "./blue-button-link"
import { IButtonProps } from "./button"
import PillButton from "./pill-button"

export default function BlueButton({
  onClick,
  ariaLabel,
  style,
  className,
  children,
}: IButtonProps) {
  return (
    <PillButton
      ariaLabel={ariaLabel}
      onClick={onClick}
      className={cn(BLUE_BUTTON_CLASSES, className)}
      style={style}
    >
      {children}
    </PillButton>
  )
}
