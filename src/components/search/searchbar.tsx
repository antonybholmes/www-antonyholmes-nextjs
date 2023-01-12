import { useEffect, useState } from "react"
import CloseIcon from "../../icons/close"
import SearchIcon from "../../icons/search"
import type IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import AnchorButton from "../link/anchor-button"
import VCenterRow from "../v-center-row"

const H = "h-12"

interface ISearchButtonProps {
  globalHover: boolean
  onClick: any
}

function SearchButton({ globalHover, onClick }: ISearchButtonProps) {
  return (
    <AnchorButton
      onClick={onClick}
      aria-label="Search"
      className="transition-ani flex h-7 w-7 min-w-7 grow-0 flex-row items-center justify-center rounded fill-gray-400 transition-colors hover:fill-gray-900"
    >
      <SearchIcon className="w-4" />
    </AnchorButton>
  )
}

interface ClearButtonProps {
  onClick: any
  visible: boolean
}

function ClearButton({ onClick, visible }: ClearButtonProps) {
  return (
    <AnchorButton
      className={cn(
        "transition-ani flex h-7 w-7 min-w-7 grow-0 flex-row items-center justify-center rounded stroke-gray-400 transition-colors hover:stroke-gray-900",
        [visible, "visible", "invisible"]
      )}
      style={{ strokeWidth: "3px" }}
      onClick={onClick}
    >
      <CloseIcon className="w-4 stroke-2" />
    </AnchorButton>
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

  function onKeyDown(e: any) {
    if (e.key === "Enter") {
      if (onSearch) {
        console.group("ssss0", e.target.value)
        onSearch(e.target.value, true)
      }
    }
  }

  function onChange(e: any) {
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
        "transition-ani m-0 gap-x-2 overflow-hidden rounded-lg border border-gray-100 bg-gray-100 py-1.5 pl-3 pr-2 transition hover:border-gray-200 hover:bg-white",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <input
        type="text"
        aria-label="Search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="grow bg-transparent text-sm outline-none"
      />

      <ClearButton onClick={onClear} visible={value !== ""} />
      <span
        className={cn("h-6 border-l border-gray-300", [
          value !== "",
          "visible",
          "invisible",
        ])}
      />

      <SearchButton globalHover={value !== ""} onClick={onClick} />
    </VCenterRow>
  )
}
