import IFocusProps from "../../interfaces/focus-props"
import ILinkProps from "../../interfaces/link-props"
import IMouseProps from "../../interfaces/mouse-props"
import cn from "../../lib/class-names"

interface IProps extends ILinkProps, IMouseProps, IFocusProps {
  target?: string
  underline?: boolean
}

export default function ExtLink({
  href,
  ariaLabel,
  target = "_blank",
  underline = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
  onMouseDown,
  onFocus,
  onBlur,
  className,
  children,
}: IProps) {
  if (children === undefined || children === null) {
    children = <>{href}</>
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onBlur={onBlur}
      className={cn([underline, `hover:underline`], className)}
    >
      {children}
    </a>
  )
}
