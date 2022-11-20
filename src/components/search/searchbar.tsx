import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import CloseIcon from "../../icons/close"
import SearchIcon from "../../icons/search"
import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import VCenterRow from "../v-center-row"

const H = "h-12"

interface ISearchButtonProps {
  globalHover: boolean
  onClick: any
}

function SearchButton({ globalHover, onClick }: ISearchButtonProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label="Search"
      className={cn(
        "color-ani flex h-7 w-7 min-w-7 grow-0 flex-row items-center justify-center rounded-full",
        [hover || globalHover, "fill-gray-900", "fill-gray-500"],
        [hover, " bg-gray-300"]
      )}
    >
      <SearchIcon className="w-4" />
    </button>
  )
}

interface ClearButtonProps {
  onClick: any
  visible: boolean
}

function ClearButton({ onClick, visible }: ClearButtonProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        `color-ani flex h-7 w-7 min-w-7 grow-0 flex-row items-center justify-center rounded-full`,
        [hover, "bg-gray-300 stroke-gray-900", "stroke-gray-500"],
        [visible, "visible", "invisible"]
      )}
      style={{ strokeWidth: "3px" }}
      onClick={onClick}
    >
      <CloseIcon className="w-4 stroke-4" />
    </button>
  )
}

interface SearchBarProps extends IClassProps {
  text?: string
  placeholder?: string
  onSearch?: (text: string, clicked: boolean) => void
}

export default function SearchBar({
  text = "",
  placeholder = "Search items...",
  className,
  onSearch,
}: SearchBarProps) {
  const [hover, setHover] = useState(false)
  const [value, setValue] = useState("")

  useEffect(() => {
    setValue(text)
  }, [])

  useEffect(() => {
    setValue(text)
  }, [text])

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (onSearch) {
        onSearch(value, true)
      }
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)

    if (onSearch) {
      onSearch(e.target.value, e.target.value === "")
    }
  }

  function onClick() {
    if (onSearch) {
      onSearch(value, true)
    }
  }

  function onClear() {
    setValue("")

    if (onSearch) {
      onSearch("", true)
    }
  }

  return (
    <VCenterRow
      className={cn(
        `m-0 gap-x-2 overflow-hidden rounded-xl bg-gray-100 p-2`,
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <SearchButton globalHover={value !== ""} onClick={onClick} />
      <input
        type="text"
        aria-label="Search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className=" w-0 grow bg-transparent text-sm outline-none"
      />

      <ClearButton onClick={onClear} visible={value !== ""} />
      {/* <span
        className={cn("h-6 border-l border-gray-300", [
          value !== "",
          "visible",
          "invisible",
        ])}
      /> */}
    </VCenterRow>
  )
}
