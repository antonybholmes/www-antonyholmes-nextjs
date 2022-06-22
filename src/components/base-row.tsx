import { ReactNode } from 'react'
import cn from '../lib/class-names'
import IStyleMap from '../types/style-map'

interface IProps {
  center?: boolean
  className?: string
  style?: IStyleMap
  onClick?: any
  onKeyDown?: any
  onMouseEnter?: any
  onMouseLeave?: any
  tabIndex?: number
  children?: ReactNode
}

const BaseRow = ({
  center = false,
  className = '',
  style,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  children,
}: IProps) => (
  <div
    className={cn('flex flex-row', [center, 'justify-center'], className)}
    style={style}
    onClick={onClick}
    onKeyDown={onKeyDown}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    tabIndex={tabIndex}
  >
    {children}
  </div>
)

export default BaseRow
