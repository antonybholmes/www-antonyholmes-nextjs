import cn from "../../lib/class-names"
import { IButtonProps } from "./button"
import { OUTLINE_CLS } from "./outline-rounded-button-link"

import PillButton from "./pill-button"

export default function OutlinePillButton({
  onClick,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  return (
    <PillButton
      onClick={onClick}
      ariaLabel={ariaLabel}
      className={cn(OUTLINE_CLS, className)}
      style={style}
    >
      {children}
    </PillButton>
  )
}

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
