import CircleInfoIcon from "../icons/circle-info"

interface IProps {
  text: string
}

const ToolTip = ({ text }: IProps) => (
  <div className="tooltip ml-2 cursor-pointer">
    <CircleInfoIcon className="w-4" />
    <div className="tooltiptext">{text}</div>
  </div>
)

export default ToolTip
