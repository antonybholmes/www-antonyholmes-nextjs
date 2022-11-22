import IHoverProps from "../../interfaces/hover-props"
import ILinkProps from "../../interfaces/link-props"
import IMouseProps from "../../interfaces/mouse-props"
import cn from "../../lib/class-names"

interface IProps extends ILinkProps, IMouseProps, IHoverProps {
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
  className,
  children,
}: IProps) {
  if (!children) {
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
      className={cn([underline, `hover:underline`], className)}
    >
      {children}
    </a>
  )
}
