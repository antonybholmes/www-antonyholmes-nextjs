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
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("group w-10 font-bold", className)}
      style={style}
    >
      <circle
        cx="24"
        cy="24"
        r="24"
        className={cn("trans-ani-300 transition-color", [
          headerMode === "dark",
          "fill-slate-600",
          "fill-blue-600 text-white group-hover:fill-blue-500",
        ])}
      />
      <text
        alignmentBaseline="middle"
        textAnchor="middle"
        x="24"
        y="26"
        className="fill-white"
      >
        ah
      </text>
    </svg>
  )
}
