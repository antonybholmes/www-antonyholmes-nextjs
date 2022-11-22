import { MouseEventHandler, useState } from "react"
import ILink from "../../interfaces/link"
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

interface IProps {
  link: ILink
  headerMode?: string
  selected: boolean
  onClick: MouseEventHandler
}

export default function MenuLink({
  link,
  headerMode = "light",
  selected,
  onClick,
}: IProps) {
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
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <BaseLink
        href={link.url}
        ariaLabel={`Visit ${link.name}`}
        className={cn(
          "color-ani flex flex-row items-center gap-x-2 overflow-hidden rounded-lg px-4 py-3 outline-none",
          [
            selected,
            "bg-blue-100/80 text-blue-600",
            [hover || hasFocus, "bg-gray-100 text-gray-900", "text-gray-600"],
          ]
        )}
      >
        {/* <HCenterRow
          className={cn(
            `h-8 min-w-8 items-center overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300`
          )}
        >
          {getIcon(link.name)}
        </HCenterRow> */}

        {link.name}
      </BaseLink>
    </li>
  )
}
