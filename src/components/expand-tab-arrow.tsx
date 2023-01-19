import ChevronUpIcon from "../icons/chevron-up"
import cn from "../lib/class-names"

interface IProps {
  expanded: boolean
  hover?: boolean
}

export default function ExpandTabArrow({ expanded, hover = false }: IProps) {
  return (
    <ChevronUpIcon //{isExpanded ? "chevron-up" : "chevron-down"}
      className={cn(
        "trans-ani-300 w-4 shrink-0 stroke-2 transition-all",
        [expanded, "rotate-0", "rotate-180"],
        [hover, "stroke-slate-900", "stroke-slate-400"]
      )}
    />
  )
}
