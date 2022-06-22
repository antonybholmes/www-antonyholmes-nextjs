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

interface ButtonProps {
  href: string
  aria: string
  icon: IconProp
}

const NextButton = ({ href, aria, icon }: ButtonProps) => (
  <RoundButtonLink
    href={href}
    aria={aria}
    className="text-white bg-gray-300 hover:bg-blue-500 w-8 h-8"
  >
    <FontAwesomeIcon icon={icon} />
  </RoundButtonLink>
)

interface IProps {
  page: number
  pages: number
  root?: string
}

const ApplePagination = ({ page, pages, root = '/blog' }: IProps) => {
  const pageStart = Math.max(1, page - 2)
  const pageEnd = Math.min(pages, pageStart + 5)

  const prevPage = Math.max(1, page - 1)
  const nextPage = Math.min(pages, page + 1)

  return (
    <HCenterCol>
      <ul className="flex flex-row items-center">
        <li className="mr-4">
          <NextButton
            href={makeUrl(root, prevPage)}
            aria="Previous page"
            icon={faChevronLeft}
          />
        </li>

        {range(pageStart, pageEnd + 1).map((p: number) => (
          <li className={'mx-3'} key={p}>
            {makePageUrl(p, page, pages, root)}
          </li>
        ))}

        <li className="ml-4">
          <NextButton
            href={makeUrl(root, nextPage)}
            aria="Next page"
            icon={faChevronRight}
          />
        </li>
      </ul>
    </HCenterCol>
  )
}

export default ApplePagination
