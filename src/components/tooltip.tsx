import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  text: string
}

const ToolTip = ({ text }: IProps) => (
  <div className="ml-2 tooltip cursor-pointer">
    <FontAwesomeIcon icon={faQuestionCircle} />
    <div className="tooltiptext">{text}</div>
  </div>
)

export default ToolTip
