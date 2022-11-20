import { useState } from "react"
import RadioButton from "./radio-button"
import * as React from "react"

type RadioButtonGroupProps = {
  items: string[]
  selected: string
  onChange: any
  className?: string
}

function RadioButtonGroup({
  items,
  selected,
  onChange,
  className,
}: RadioButtonGroupProps) {
  const [index, setIndex] = useState(selected)

  function handleChange(text: string, index: number) {
    setIndex(text)

    onChange(index)
  }

  return (
    <ul className={className}>
      {items.map((item: string, index: number) => {
        return (
          <RadioButton
            key={index}
            text={item}
            index={index}
            selected={item === selected}
            onChange={handleChange}
          />
        )
      })}
    </ul>
  )
}

export default RadioButtonGroup
