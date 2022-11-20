import { useState } from "react"
import cn from "../../lib/class-names"

export const RADIO_SIZE = "18px"
export const ORB_SIZE = "10px"
export const ORB_OFFSET = "3px"

type RadioButtonProps = {
  index: number
  text: string
  selected: boolean
  onChange: any
}

export default function RadioButton({
  index,
  text,
  selected,
  onChange,
}: RadioButtonProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter(e: any) {
    setHover(true)
  }

  function onMouseLeave(e: any) {
    setHover(false)
  }

  return (
    <li key={index}>
      <button
        onClick={() => onChange(text, index)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`flex w-full cursor-pointer flex-row items-center gap-x-2`}
      >
        <div
          className={cn(
            `relative overflow-hidden rounded-full border bg-white`,
            [
              selected,
              "border-blue-500",
              cn("color-ani", [hover, "!border-blue-400", "!border-gray-300"]),
            ]
          )}
          style={{ width: RADIO_SIZE, height: RADIO_SIZE }}
        >
          {selected && (
            <div
              className="absolute rounded-full bg-blue-500"
              style={{
                width: ORB_SIZE,
                height: ORB_SIZE,
                left: ORB_OFFSET,
                top: ORB_OFFSET,
              }}
            />
          )}
        </div>

        <div className={`color-ani truncate`}>{text}</div>
      </button>
    </li>
  )
}
