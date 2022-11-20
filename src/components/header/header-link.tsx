import ILink from "../../interfaces/link"
import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"

const BAR_WIDTH = "2px"

export const LINK_CLS = "block relative whitespace-nowrap color-ani"

type IProps = {
  link: ILink
  selected: boolean
  onClick?: any
  headerMode?: string
}

export default function HeaderLink({
  link,
  selected,
  onClick,
  headerMode = "light",
}: IProps) {
  return (
    <BaseLink
      href={link.url}
      ariaLabel={`View ${link.name}`}
      className={cn(LINK_CLS, [
        selected,
        " text-blue-600",
        " hover:text-blue-400",
      ])}
      onClick={onClick}
    >
      {link.name}

      {/* {selected && (
        <div
          className={cn("absolute bottom-0 w-full bg-blue-400")}
          style={{ height: BAR_WIDTH }}
        />
      )} */}
    </BaseLink>
  )
}
