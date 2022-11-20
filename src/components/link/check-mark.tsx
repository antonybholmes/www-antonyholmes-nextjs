import cn from "../../lib/class-names"
import CheckIcon from "../../icons/check"
import VCenterRow from "../v-center-row"
import { BASE_BUTTON_CLASSES } from "./button-link"
import { RADIO_SIZE } from "./radio-button"

type CheckMarkProps = {
  selected: boolean
  hover: boolean
  className?: string
}

export default function CheckMark({
  selected,
  hover,
  className,
}: CheckMarkProps) {
  return (
    <VCenterRow
      className={cn(
        BASE_BUTTON_CLASSES,
        "grow-0 overflow-hidden rounded border",
        [
          selected,
          "!border-blue-500 bg-blue-500 text-white",
          `color-ani bg-white ${
            hover ? "!border-blue-400" : "!border-gray-300"
          }`,
        ],
        className
      )}
      style={{ width: RADIO_SIZE, height: RADIO_SIZE }}
    >
      {selected && (
        <CheckIcon
          className="w-3 stroke-white"
          style={{ strokeWidth: "4px" }}
        />
      )}
    </VCenterRow>
  )
}
