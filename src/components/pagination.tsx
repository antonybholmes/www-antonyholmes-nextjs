import RoundButtonLink from './link/round-button-link'
import BlueLink from './link/blue-link'
import { range } from 'lodash'
import ToBlueLink from './link/to-blue-link'
import HCenterCol from './h-center-col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import BaseLink from './link/base-link'
import { ReactElement, ReactNode } from 'react'
import cn from '../lib/class-names'

const makeUrl = (root: string, page: number) => {
  return `${root}/page/${page}`
}

const makePageUrl = (p: number, page: number, pages: number, root: string) => {
  if (p === page) {
    return (
      <BlueLink
        href={makeUrl(root, p)}
        aria={`View page ${p}`}
        underline={false}
      >
        {p}
      </BlueLink>
    )
  } else {
    if (p <= pages) {
      return (
        <ToBlueLink
          href={makeUrl(root, p)}
          aria={`View page ${p}`}
          underline={false}
        >
          {p}
        </ToBlueLink>
      )
    } else {
      return p
    }
  }
}

const BTN_CLS =
  'flex flex-row items-center justify-center border border-transparent min-w-8 py-1 rounded-md overflow-hidden'

interface BaseButtonProps {
  href: string
  aria: string
}

interface ButtonProps extends BaseButtonProps {
  className?: string
  children: ReactNode
}

const Button = ({ href, aria, className, children }: ButtonProps) => (
  <BaseLink
    href={href}
    aria={aria}
    className={cn(
      BTN_CLS,
      'text-blue-500 hover:border-gray-300 transition duration-300',
      className
    )}
  >
    {children}
  </BaseLink>
)

const PrevButton = ({ href, aria }: BaseButtonProps) => (
  <Button href={href} aria={aria} className="px-2">
    <FontAwesomeIcon icon={faChevronLeft} className="mr-1" /> Prev
  </Button>
)

const NextButton = ({ href, aria }: BaseButtonProps) => (
  <Button href={href} aria={aria} className="px-2">
    Next <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
  </Button>
)

interface PageButtonProps extends BaseButtonProps {
  children: ReactNode
}

interface IProps {
  page: number
  pages: number
  root?: string
}

interface IPageButtonProps extends IProps {
  currentPage: number
}

const PageButton = ({ page, currentPage, pages, root }: IPageButtonProps) => (
  <BaseLink
    href={makeUrl(root, page)}
    aria={`Goto page ${page}`}
    className={cn(BTN_CLS, [
      page === currentPage,
      'border-blue-600 bg-blue-600 text-white',
      'border-transparent  hover:border-gray-300 transition duration-300',
    ])}
  >
    {page}
  </BaseLink>
)

const Pagination = ({ page, pages, root = '/blog' }: IProps) => {
  const pageStart = Math.max(2, page - 1)
  const pageEnd = Math.min(page + 1, pages - 1)

  const prevPage = Math.max(1, page - 1)
  const nextPage = Math.min(pages, page + 1)

  return (
    <HCenterCol>
      <ul className="flex flex-row items-center">
        <li>
          <PrevButton href={makeUrl(root, prevPage)} aria="Previous page" />
        </li>

        <li className="ml-1">
          <PageButton currentPage={page} page={1} pages={pages} root={root} />
        </li>

        {pageStart > 2 && <li className={'ml-2 mr-1'}>...</li>}

        {range(pageStart, pageEnd + 1).map((p: number, index: number) => (
          <li className="ml-1" key={p}>
            <PageButton currentPage={page} page={p} pages={pages} root={root} />
          </li>
        ))}

        {pageEnd < pages - 1 && <li className={'ml-2 mr-1'}>...</li>}

        <li className={'ml-1'}>
          <PageButton
            currentPage={page}
            page={pages}
            pages={pages}
            root={root}
          />
        </li>

        <li className="ml-1">
          <NextButton href={makeUrl(root, nextPage)} aria="Next page" />
        </li>
      </ul>
    </HCenterCol>
  )
}

export default Pagination
