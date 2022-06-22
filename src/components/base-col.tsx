import { ReactNode } from 'react'
import cn from '../lib/class-names'
import IStyleMap from '../types/style-map'

interface IProps {
  center?: boolean
  className?: string
  style?: IStyleMap
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  tabIndex?: number
  children?: ReactNode
}

const BaseCol = ({
  center = false,
  className = '',
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) => (
  <div
    className={cn('flex flex-col', [center, 'justify-center'], className)}
    style={style}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    tabIndex={tabIndex}
  >
    {children}
  </div>
)

export default BaseCol
