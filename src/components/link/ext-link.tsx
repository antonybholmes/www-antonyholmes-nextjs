import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import IMouseProps from "../../interfaces/mouse-props"

interface IProps extends ILinkProps, IMouseProps {
  target?: string
  underline?: boolean
}

const ExtLink = ({
  href,
  ariaLabel,
  target = "_blank",
  underline = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
  children,
}: IProps) => {
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
      className={cn([underline, `hover:underline`], className)}
    >
      {children}
    </a>
  )
}

export default ExtLink
