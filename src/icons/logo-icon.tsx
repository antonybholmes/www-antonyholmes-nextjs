import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

interface IProps extends IClassProps {
  headerMode?: string
}

export default function LogoIcon({
  headerMode = "light",
  className,
  style,
}: IProps) {
  return (
    <svg
      viewBox="0 0 160 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("group h-10 font-bold rounded", className)}
      style={style}
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        className={cn("trans-ani-300 transition-color ", [
          headerMode === "dark",
          "fill-slate-600",
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
      <text
        alignmentBaseline="middle"
        x="48"
        y="21"
        className={cn([headerMode === "dark", "fill-white", "fill-gray-900"])}
      >
        antonyholmes
      </text>
    </svg>
  )
}
