import ChevronUpIcon from "../icons/chevron-up"
import cn from "../lib/class-names"

interface IProps {
  expanded: boolean
  hover?: boolean
}

const ExpandTabArrow = ({ expanded, hover = false }: IProps) => {
  return (
    <ChevronUpIcon //{isExpanded ? "chevron-up" : "chevron-down"}
      className={cn(
        `transition-ani w-4 stroke-2 transition-all`,
        [expanded, "rotate-180", "rotate-0"],
        [hover, "stroke-gray-900", "stroke-slate-400"]
      )}
    />
  )
}

export default ExpandTabArrow
