import { ReactNode } from 'react'

interface IProps {
  w?: string
  size?: string
  isMobile?: boolean
  isCentered?: boolean
  isVCentered?: boolean
  wrap?: boolean
  onClick?: any
  className?: string
  style?: any
  onMouseEnter?: any
  onMouseLeave?: any
  onMouseMove?: any
  onMouseUp?: any
  onMouseDown?: any
  tabIndex?: number
  children?: ReactNode
}

const Row = ({
  w = '',
  size = 'md',
  isCentered = false,
  isVCentered = true,
  wrap = false,
  onClick = null,
  className = '',
  style = {},
  onMouseEnter = null,
  onMouseLeave = null,
  onMouseMove = null,
  onMouseUp = null,
  onMouseDown = null,
  tabIndex = undefined,
  children,
}: IProps) => {
  const baseClass = `flex flex-row ${w !== '' ? `w-full ${size}:${w}` : ''} ${
    isCentered ? 'justify-center' : ''
  } ${isVCentered ? 'items-center' : ''} ${wrap ? 'flex-wrap' : ''}`

  return (
    <div
      className={`${baseClass} ${className}`}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  )
}

export default Row
