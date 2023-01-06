import type IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import RadioButtonGroup from "../link/radio-button-group"

const ITEMS = [
  "Publication Date",
  "Title",
  "Journal",
  "First Author",
  "Last Author",
]

interface SortProps extends IClassProps {
  onChange: any
  selected: string
}

function SortBy({ selected, onChange, className }: SortProps) {
  //const [selectedIndex, setSelectedIndex] = useState(0)

  function onClick(index: number) {
    onChange(ITEMS[index])
  }

  return (
    <RadioButtonGroup
      items={ITEMS}
      selected={selected}
      onClick={onClick}
      className={cn("mt-4 flex flex-col gap-y-1", className)}
    />

    // <ul>
    //   {ITEMS.map((text: string, index: number) {
    //     return (
    //       <SortItem
    //         key={index}
    //         index={index}
    //         selected={selected}
    //         text={text}
    //         onChange={_handleChange}
    //       />
    //     )
    //   })}
    // </ul>
  )
}

export default SortBy
