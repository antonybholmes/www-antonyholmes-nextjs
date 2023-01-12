import CircleInfoIcon from "../icons/circle-info"

interface IProps {
  text: string
}

export default function ToolTip({ text }: IProps) {
  return (
    <div className="tooltip ml-2 cursor-pointer">
      <CircleInfoIcon className="w-4" />
      <div className="tooltiptext">{text}</div>
    </div>
  )
}
