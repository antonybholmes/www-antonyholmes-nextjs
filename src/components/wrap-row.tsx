import IStyleMap from '../types/style-map'
import BaseRow from './base-row'

interface IProps {
  className?: string
  style?: IStyleMap
  center?: boolean
  children?: React.ReactNode
}

const WrapRow = ({
  className = '',
  style,
  center = false,
  children,
}: IProps) => (
  <BaseRow className={`flex-wrap ${className}`} style={style} center={center}>
    {children}
  </BaseRow>
)

export default WrapRow
