import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

interface IProps extends IClassProps {
  headerMode?: string
}

export default function SmallLogoIcon({
  headerMode = "light",
  className,
  style,
}: IProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "group h-10 font-bold rounded border",
        [headerMode === "dark", "border-white/20", "border-transparent"],
        className
      )}
      style={style}
    >
      <rect
        width="40"
        height="40"
        className={cn("trans-ani-300 transition-color ", [
          headerMode === "dark",
          "fill-transparent",
          "fill-blue-600 text-white group-hover:fill-blue-500",
        ])}
      />
      <text
        alignmentBaseline="middle"
        textAnchor="middle"
        x="20"
        y="21"
        className="fill-white"
      >
        ah
      </text>
    </svg>
  )
}
