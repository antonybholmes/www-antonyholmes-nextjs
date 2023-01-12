import { useState } from "react"
import cn from "../../lib/class-names"
import type { IButtonProps } from "./button"
import OutlineRoundedButton from "./outline-rounded-button"
import { SECONDARY_BUTTON_CLS } from "./secondary-button-link"

export default function SecondaryButton({
  onClick,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  const [hover, setHover] = useState(false)
  const [down, setDown] = useState(false)

  return (
    <OutlineRoundedButton
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      ariaLabel={ariaLabel}
      className={cn(
        SECONDARY_BUTTON_CLS,
        [down, "bg-gray-100", [hover, "bg-gray-50"]],
        [hover || down, "border-gray-300"],
        className
      )}
      style={style}
    >
      {children}
    </OutlineRoundedButton>
  )
}
