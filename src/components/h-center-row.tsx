import IStyleMap from '../types/style-map'
import BaseRow from './base-row'

interface IProps {
  className?: string
  style?: IStyleMap
  tabIndex?: number
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  children?: React.ReactNode
}

const HCenterRow = ({
  className,
  style,
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  return (
    <BaseRow
      center={true}
      className={className}
      style={style}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </BaseRow>
  )
}

export default HCenterRow
