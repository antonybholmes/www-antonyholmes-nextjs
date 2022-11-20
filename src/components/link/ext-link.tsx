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
  onHover,
  className,
  children,
}: IProps) {
  function _onMouseEnter(e: React.MouseEvent<Element, MouseEvent>) {
    if (onHover) {
      onHover(true)
    }

    if (onMouseEnter) {
      onMouseEnter(e)
    }
  }

  function _onMouseLeave(e: React.MouseEvent<Element, MouseEvent>) {
    if (onHover) {
      onHover(false)
    }

    if (onMouseLeave) {
      onMouseLeave(e)
    }
  }

  if (!children) {
    children = <>{href}</>
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      onClick={onClick}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
      className={cn([underline, `hover:underline`], className)}
    >
      {children}
    </a>
  )
}
