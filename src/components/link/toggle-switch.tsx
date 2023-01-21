import cn from "../../lib/class-names"
import VCenterRow from "../v-center-row"
import BaseCheckBoxButton from "./base-checkbox-button"
import type { ICheckBoxProps } from "./check-box"

export default function ToggleSwitch({
  index = -1,
  isSelected,
  onClick,
  className,
  children,
}: ICheckBoxProps) {
  return (
    <VCenterRow className={cn("justify-between gap-x-4", className)}>
      <span>{children}</span>
      <BaseCheckBoxButton
        isSelected={isSelected}
        onClick={() => onClick(index, !isSelected)}
        className="group cursor-pointer"
      >
        <svg
          viewBox="0 0 24 16"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 shrink-0"
        >
          <rect
            width="24"
            height="16"
            rx="8"
            className={cn("trans-ani-300 transition-colors", [
              isSelected,
              "fill-blue-600 group-hover:fill-blue-500",
              "fill-slate-200 group-hover:fill-slate-300",
            ])}
          />
          <circle
            cx="8"
            cy="8"
            r="7"
            className={cn("trans-ani-300 fill-white transition-transform", [
              isSelected,
              "translate-x-toggle",
            ])}
          />
        </svg>
      </BaseCheckBoxButton>
    </VCenterRow>
  )
}
