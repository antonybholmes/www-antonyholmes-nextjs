import CircleInfoIcon from "../icons/circle-infoo"

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
