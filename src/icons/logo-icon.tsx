import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

interface IProps extends IClassProps {
  headerMode?: string
}

export default function LogoIcon({ headerMode = "light", className }: IProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-14 group font-bold", className)}
    >
      <rect
        width="32"
        height="32"
        className={cn("transition-ani transition-color", [
          headerMode === "light",
          "  fill-sky-600 text-white group-hover:fill-sky-500",
          "fill-gray-300 group-hover:fill-gray-200",
        ])}
      />
      <text
        alignmentBaseline="middle"
        textAnchor="middle"
        x="16"
        y="17"
        className={cn("transition-ani transition-color", [
          headerMode === "light",
          "fill-white",
          "fill-gray-900",
        ])}
      >
        ah
      </text>
    </svg>
  )
}
