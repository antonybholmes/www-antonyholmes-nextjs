import cn from '../lib/class-names'
import IStyleMap from '../types/style-map'
import BaseCol from './base-col'

interface IProps {
  center?: boolean
  className?: string
  style?: IStyleMap
  tabIndex?: number
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  children?: React.ReactNode
}

const HCenterCol = ({
  center = false,
  className = '',
  style,
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseCol
      center={center}
      className={cn('items-center', className)}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseCol>
  )
}

export default HCenterCol
