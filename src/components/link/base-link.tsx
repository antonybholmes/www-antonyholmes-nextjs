import Link from "next/link"
import { useEffect } from "react"
import IHoverProps from "../../interfaces/hover-props"
import ILinkProps from "../../interfaces/link-props"
import IMouseProps from "../../interfaces/mouse-props"
import cn from "../../lib/class-names"
import ExtLink from "./ext-link"

interface IProps extends ILinkProps, IMouseProps, IHoverProps {}

function BaseLink({
  href,
  target = "_blank",
  ariaLabel,
  underline = false,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
  onMouseDown,
  children,
}: IProps) {
  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [])

  if (!ariaLabel) {
    ariaLabel = `Click to visit ${href}`
  }

  // Test if we use the NextJS router link or a regular a for external urls
  const isExt =
    href &&
    (!href.startsWith("/") || href.startsWith("http") || href.startsWith("www"))

  if (isExt) {
    return (
      <ExtLink
        href={href}
        ariaLabel={ariaLabel}
        className={className}
        underline={underline}
        target={target}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
      >
        {children}
      </ExtLink>
    )
  } else {
    if (!children) {
      children = <>{href}</>
    }

    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={cn([underline, `hover:underline`], className)}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
      >
        {children}
      </Link>
    )
  }
}

export default BaseLink
