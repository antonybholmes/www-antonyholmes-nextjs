import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'

interface IProps extends ILinkProps {
  target?: string
  underline?: boolean
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
}

const ExtLink = ({
  href,
  aria,
  target = '_blank',
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
      aria-label={aria}
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
