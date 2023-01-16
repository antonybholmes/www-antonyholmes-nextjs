import { range } from "lodash"
import ChevronLeftIcon from "../icons/chevron-left"
import ChevronRightIcon from "../icons/chevron-right"
import type IAriaProps from "../interfaces/aria-props"
import type IChildrenProps from "../interfaces/children-props"
import type IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"
import RoundedButtonLink from "./link/rounded-button-link"

const BTN_CLS =
  "flex flex-row justify-center items-center min-w-8 h-8 border border-transparent"

interface IClickProps {
  href: string
}

interface INavButtonProps extends IClickProps, IAriaProps, IChildrenProps {}

function LinkButton({ href, ariaLabel, className, children }: INavButtonProps) {
  return (
    <RoundedButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(
        BTN_CLS,
        "transition duration-300 hover:border-slate-300",
        className
      )}
    >
      {children}
    </RoundedButtonLink>
  )
}

function NavButton({ href, ariaLabel, className, children }: INavButtonProps) {
  return (
    <LinkButton
      href={href}
      ariaLabel={ariaLabel}
      className={cn(
        BTN_CLS,
        "gap-x-2 stroke-blue-600 px-2 text-blue-600",
        className
      )}
    >
      {children}
    </LinkButton>
  )
}

function PrevButton({ href }: IClickProps) {
  return (
    <NavButton href={href} ariaLabel="Previous page">
      <ChevronLeftIcon className="w-4" /> Prev
    </NavButton>
  )
}

function NextButton({ href }: IClickProps) {
  return (
    <NavButton href={href} ariaLabel="Next page">
      Next <ChevronRightIcon className="w-4" />
    </NavButton>
  )
}

interface ISelectedPageButtonProps extends IClassProps {
  href: string
  page: number
}

function BasePageButton({ href, page, className }: ISelectedPageButtonProps) {
  return (
    <RoundedButtonLink
      href={href}
      ariaLabel={`Goto page ${page}`}
      className={cn(BTN_CLS, className)}
    >
      {page + 1}
    </RoundedButtonLink>
  )
}

function SelectedPageButton({ href, page }: ISelectedPageButtonProps) {
  return (
    <BasePageButton
      page={page}
      href={href}
      className="bg-blue-600 text-white"
    />
  )
}

interface IPageButtonProps extends ISelectedPageButtonProps {
  selected: boolean
}

function PageButton({ href, page, selected }: IPageButtonProps) {
  if (selected) {
    return <SelectedPageButton href={href} page={page} />
  } else {
    return (
      <BasePageButton
        href={href}
        page={page}
        className="hover:border-slate-300"
      />
    )
  }
}

function Ellipsis() {
  return <li className={BTN_CLS}>...</li>
}

interface IProps {
  page: number
  pages: number
  root?: string
}

function getPath(page: number, root: string) {
  return `${root}/page/${page + 1}`
}

export default function PagePagination({
  page,
  pages,
  root = "/blog",
}: IProps) {
  // Sometimes page is -1 to indicate a special type of
  // root page, however it still represents page 0 of
  // blog results

  // FOR TESTING ONLY
  //pages = 50
  //page = 45

  page = Math.max(0, page)

  const pageStart = Math.max(page - 1, 1)
  const pageEnd = Math.min(page + 1, pages - 2)

  const prevPage = Math.max(0, page - 1)
  const nextPage = Math.min(pages - 1, page + 1)

  return (
    <ul className="flex flex-row items-center gap-x-1">
      <li>
        <PrevButton href={getPath(prevPage, root)} />
      </li>

      <li>
        <PageButton page={0} href={getPath(0, root)} selected={page === 0} />
      </li>

      {pageStart > 1 && <Ellipsis />}

      {range(pageStart, pageEnd + 1).map((p: number, index: number) => (
        <li key={p}>
          <PageButton href={getPath(p, root)} page={p} selected={p === page} />
        </li>
      ))}

      {pageEnd < pages - 2 && <Ellipsis />}

      <li>
        <PageButton
          href={getPath(pages - 1, root)}
          page={pages - 1}
          selected={page === pages - 1}
        />
      </li>

      <li>
        <NextButton href={getPath(nextPage, root)} />
      </li>
    </ul>
  )
}
