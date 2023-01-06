import { range } from "lodash"
import cn from "../lib/class-names"
import type IChildrenProps from "../interfaces/children-props"
import type IAriaProps from "../interfaces/aria-props"
import RoundedButton from "./link/rounded-button"
import ChevronLeftIcon from "../icons/chevron-left"
import ChevronRightIcon from "../icons/chevron-right"

const BTN_CLS =
  "flex flex-row justify-center items-center min-w-8 h-8 border border-transparent"

interface IClickProps {
  page: number
  onClick: (page: number) => void
}

interface INavButtonProps extends IClickProps, IAriaProps, IChildrenProps {}

function LinkButton({
  page,
  onClick,
  ariaLabel,
  className,
  children,
}: INavButtonProps) {
  return (
    <RoundedButton
      onClick={() => {
        onClick(page)
      }}
      ariaLabel={ariaLabel}
      className={cn(
        BTN_CLS,
        "transition duration-300 hover:border-slate-300",
        className
      )}
    >
      {children}
    </RoundedButton>
  )
}

function NavButton({
  page,
  onClick,
  ariaLabel,
  className,
  children,
}: INavButtonProps) {
  return (
    <LinkButton
      page={page}
      onClick={onClick}
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

function PrevButton({ page, onClick }: IClickProps) {
  return (
    <NavButton page={page} onClick={onClick} ariaLabel="Previous page">
      <ChevronLeftIcon className="w-4" /> Prev
    </NavButton>
  )
}

function NextButton({ page, onClick }: IClickProps) {
  return (
    <NavButton page={page} onClick={onClick} ariaLabel="Next page">
      Next <ChevronRightIcon className="w-4" />
    </NavButton>
  )
}

interface ISelectedPageButtonProps extends IChildrenProps, IClickProps {
  page: number
}

interface IPageButtonProps extends ISelectedPageButtonProps {
  currentPage: number
}

function BasePageButton({
  page,
  onClick,
  className,
}: ISelectedPageButtonProps) {
  return (
    <RoundedButton
      onClick={() => {
        onClick(page)
      }}
      ariaLabel={`Goto page ${page}`}
      className={cn(BTN_CLS, className)}
    >
      {page}
    </RoundedButton>
  )
}

function SelectedPageButton({ page, onClick }: ISelectedPageButtonProps) {
  return (
    <BasePageButton
      page={page}
      onClick={onClick}
      className="bg-blue-600 text-white"
    >
      {page}
    </BasePageButton>
  )
}

function PageButton({ page, currentPage, onClick }: IPageButtonProps) {
  return page === currentPage ? (
    <SelectedPageButton page={page} onClick={onClick} />
  ) : (
    <BasePageButton
      page={page}
      onClick={onClick}
      className="transition duration-300 hover:border-slate-300"
    >
      {page}
    </BasePageButton>
  )
}

function Ellipsis() {
  return <li className={BTN_CLS}>...</li>
}

interface IProps extends ISelectedPageButtonProps, IClickProps {
  pages: number
}

export default function Pagination({ page, pages, onClick }: IProps) {
  const pageStart = Math.max(page - 1, 2)
  const pageEnd = Math.min(page + 1, pages - 1)

  const prevPage = Math.max(1, page - 1)
  const nextPage = Math.min(pages, page + 1)

  return (
    <ul className="flex flex-row items-center gap-x-1">
      <li>
        <PrevButton onClick={onClick} page={prevPage} />
      </li>

      <li>
        <PageButton page={1} currentPage={page} onClick={onClick} />
      </li>

      {pageStart > 2 && <Ellipsis />}

      {range(pageStart, pageEnd + 1).map((p: number, index: number) => (
        <li key={p}>
          <PageButton page={p} currentPage={page} onClick={onClick} />
        </li>
      ))}

      {pageEnd < pages - 1 && <Ellipsis />}

      <li>
        <PageButton page={pages} currentPage={page} onClick={onClick} />
      </li>

      <li>
        <NextButton onClick={onClick} page={nextPage} />
      </li>
    </ul>
  )
}
