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
      className={cn("w-14 group font-bold", className)}
      style={style}
    >
      <rect
        width="48"
        height="48"
        className={cn("transition-ani transition-color", [
          headerMode === "dark",
          "fill-slate-400",
          "fill-sky-600 text-white group-hover:fill-sky-500",
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
