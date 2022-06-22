import cn from '../lib/class-names'
import IStyleMap from '../types/style-map'
import BaseRow from './base-row'

interface IProps {
  center?: boolean
  className?: string
  style?: IStyleMap
  tabIndex?: number
  onClick?: any
  onKeyDown?: any
  onMouseEnter?: any
  onMouseLeave?: any
  children?: React.ReactNode
}

const VCenterRow = ({
  center = false,
  className = '',
  style,
  tabIndex,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseRow
      center={center}
      className={cn('items-center', className)}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseRow>
  )
}

export default VCenterRow
