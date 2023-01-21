import cn from "../../lib/class-names"
import type { IButtonProps } from "./base-button"
import OutlineRoundedButton from "./outline-rounded-button"
import { SECONDARY_BUTTON_CLS } from "./secondary-button-link"

export default function SecondaryButton({
  onClick,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  //const [hover, setHover] = useState(false)
  //const [down, setDown] = useState(false)

  return (
    <OutlineRoundedButton
      onClick={onClick}
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
      // onMouseDown={() => setDown(true)}
      // onMouseUp={() => setDown(false)}
      ariaLabel={ariaLabel}
      className={cn(SECONDARY_BUTTON_CLS, className)}
      style={style}
    >
      {children}
    </OutlineRoundedButton>
  )
}
