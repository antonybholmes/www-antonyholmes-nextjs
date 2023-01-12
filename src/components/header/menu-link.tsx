import { useState } from "react"
import type ILink from "../../interfaces/link"
import IMouseProps from "../../interfaces/mouse-props"
import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"

const H = 10

// const getIcon = (name: string) {
//   switch (name) {
//     case 'Blog':
//       return <BlogIcon className="w-4 fill-blue-400" />
//     case 'Portfolios':
//       return <StocksIcon className="w-4 fill-violet-400" />
//     case 'Credit Cards':
//       return <CreditCardIcon className="w-4 fill-emerald-400" />
//     default:
//       return <CalculatorIcon className="w-4 fill-pink-400" />
//   }
// }

interface IProps extends IMouseProps {
  link: ILink
  headerMode?: string
  selected: boolean
}

export default function MenuLink({ link, selected, onClick }: IProps) {
  const [hover, setHover] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  function onFocus() {
    setHasFocus(true)
  }

  function onBlur() {
    setHasFocus(false)
  }

  return (
    <BaseLink
      href={link.url}
      ariaLabel={`Visit ${link.name}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      className={cn(
        "transition-ani flex flex-row items-center gap-x-2 overflow-hidden  px-8 py-3 rounded transition-colors",
        [selected, " text-blue-600", "text-slate-900"],
        [hover || hasFocus, "bg-slate-200"]
      )}
    >
      {/* <HCenterRow
          className={cn(
            `h-8 min-w-8 items-center overflow-hidden rounded-md border border-slate-200 bg-white transition-all duration-300`
          )}
        >
          {getIcon(link.name)}
        </HCenterRow> */}

      {link.name}
    </BaseLink>
  )
}
