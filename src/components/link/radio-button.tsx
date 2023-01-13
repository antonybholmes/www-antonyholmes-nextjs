import type IChildrenProps from "../../interfaces/children-props"
import cn from "../../lib/class-names"
import VCenterRow from "../v-center-row"
import Button from "./button"

// export const RADIO_SIZE = "18px"
// export const ORB_SIZE = "10px"
// export const ORB_OFFSET = "3px"

interface IRadioButtonProps extends IChildrenProps {
  index: number
  selected: boolean
  onClick: (index: number) => void
}

export default function RadioButton({
  index,
  selected,
  onClick,
  children,
}: IRadioButtonProps) {
  return (
    <VCenterRow className="gap-x-2 text-left">
      <Button onClick={() => onClick(index)} className="group cursor-pointer">
        {/* <div
          className={cn(
            `relative overflow-hidden rounded-full border bg-white`,
            [
              selected,
              "border-blue-600",
              cn("transition-ani transition-colors", [hover, "!border-blue-400", "!border-slate-300"]),
            ]
          )}
          style={{ width: RADIO_SIZE, height: RADIO_SIZE }}
        >
          {selected && (
            <div
              className="absolute rounded-full bg-blue-600"
              style={{
                width: ORB_SIZE,
                height: ORB_SIZE,
                left: ORB_OFFSET,
                top: ORB_OFFSET,
              }}
            />
          )}
        </div> */}

        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 w-5"
        >
          <circle
            cx="8"
            cy="8"
            r="7"
            className={cn("transition-ani transition-color fill-white", [
              selected,
              "stroke-blue-600",
              "stroke-slate-300 group-hover:stroke-slate-500",
            ])}
          />

          {selected && <circle cx="8" cy="8" r="4" className="fill-blue-600" />}
        </svg>
      </Button>
      <span className="grow">{children}</span>
    </VCenterRow>
  )
}
