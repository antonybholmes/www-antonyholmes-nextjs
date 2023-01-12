import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

interface IProps extends IClassProps {
  headerMode?: string
}

export default function LogoIcon({ headerMode = "light", className }: IProps) {
  const textClass = cn("transition-ani transition-color", [
    headerMode === "light",
    "fill-sky-600 group-hover:fill-sky-500",
    "fill-gray-300 group-hover:fill-gray-200",
  ])

  return (
    <svg
      viewBox="0 0 66 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("group h-9 font-bold", className)}
    >
      <rect
        width="24"
        height="24"
        className={cn("transition-ani transition-color", [
          headerMode === "light",
          "  fill-sky-600 text-white group-hover:fill-sky-500",
          "fill-gray-300 group-hover:fill-gray-200",
        ])}
      />
      <text
        alignmentBaseline="middle"
        textAnchor="middle"
        x="12"
        y="14"
        className={cn("transition-ani transition-color", [
          headerMode === "light",
          "fill-white",
          "fill-gray-900",
        ])}
      >
        ah
      </text>
      <text
        alignmentBaseline="middle"
        textAnchor="middle"
        x="28"
        y="14"
        className={textClass}
      >
        .
      </text>
      <text alignmentBaseline="middle" x="31" y="14" className={textClass}>
        com
      </text>
    </svg>
  )
}
