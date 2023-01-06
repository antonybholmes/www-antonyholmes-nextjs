import type IChildrenProps from "../../interfaces/children-props"
import cn from "../../lib/class-names"

export interface ICheckBoxProps extends IChildrenProps {
  index?: number
  isSelected: boolean
  onClick: (index: number, selected: boolean) => void
}

export default function CheckBox({
  index = -1,
  isSelected = false,
  onClick,
  className,
  children,
}: ICheckBoxProps) {
  return (
    <button
      onClick={() => onClick(index, !isSelected)}
      className={cn(
        `group flex cursor-pointer flex-row items-center justify-start gap-x-2`,
        className
      )}
    >
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5"
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
        }}
      >
        <rect
          x="1"
          y="1"
          width="14"
          height="14"
          rx="3"
          className={cn("transition-ani transition-color", [
            isSelected,
            "fill-blue-600 stroke-blue-600",
            "fill-white stroke-slate-300 group-hover:stroke-slate-400",
          ])}
        />
        {isSelected && (
          <path d="M 4,8 L 7,11 L 12,5" className="stroke-white stroke-2" />
        )}
      </svg>

      <div className="grow text-left">{children}</div>
    </button>
  )
}
