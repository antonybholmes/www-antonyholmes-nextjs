import { useState } from "react"
import RadioButton from "./radio-button"

interface RadioButtonGroupProps {
  items: string[]
  selected?: string
  onClick: (index: number) => void
  className?: string
}

export default function RadioButtonGroup({
  items,
  selected = "",
  onClick,
  className,
}: RadioButtonGroupProps) {
  const [index, setIndex] = useState(selected)

  function _onClick(index: number) {
    setIndex(items[index])

    onClick(index)
  }

  return (
    <ul className={className}>
      {items.map((item: string, index: number) => {
        return (
          <li key={index}>
            <RadioButton
              key={index}
              index={index}
              selected={item === selected}
              onClick={_onClick}
            >
              {item}
            </RadioButton>
          </li>
        )
      })}
    </ul>
  )
}
