import { range } from "lodash"
import type IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import BasePublication from "./base-publication"

interface PublicationListProps extends IClassProps {
  publications: any[]
  showAbstract?: boolean
  showCount?: boolean
  page?: number
  pageBreak?: number
}

// Space is only added to intermediate elements of the list so that
// wasted space at the bottom is removed

function BasePublicationList({
  publications,
  showAbstract = false,
  showCount = false,
  page = 0,
  pageBreak = -1,
  className,
}: PublicationListProps) {
  if (pageBreak == -1) {
    pageBreak = publications.length
  }

  const indexOffset = page * pageBreak

  // divide into pages
  const pages = range(
    0,
    Math.floor((publications.length - 1) / pageBreak) + 1
  ).map(p => {
    const startIndex = p * pageBreak

    const elems = []

    if (p > 0) {
      elems.push(
        <li
          key={`divider-${p}`}
          className="my-4 flex flex-row items-center gap-x-4 text-xs text-slate-500"
        >
          <hr className="grow text-slate-100" />
          <span>Page {page + p + 1}</span>
          <hr className="grow text-slate-100" />
        </li>
      )
    }

    elems.push(
      ...publications
        .slice(startIndex, startIndex + pageBreak)
        .map((publication, index) => {
          // Represents the current offset (page) + the offset of the current page from the
          // start page plus the index of the publication within the page
          const pubIndex = indexOffset + startIndex + index

          return (
            <li key={pubIndex}>
              <BasePublication
                index={pubIndex}
                showCount={showCount}
                publication={publication}
                showAbstract={showAbstract}
              />
            </li>
          )
        })
    )

    return elems
  })

  return (
    <ul className={cn("flex flex-col gap-y-2", className)}>
      {pages.map(page => {
        return page
      })}
    </ul>
  )
}

export default BasePublicationList
