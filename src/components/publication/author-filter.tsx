import { useState } from "react"
import ExpandTab from "../expand-tab"
import ToggleSwitch from "../link/toggle-switch"

import { Journal } from "./journal-filter"

interface AuthorFilterProps {
  authors: [string, number][]
  selected: Set<string>
  onClick: any
  max: number
}

function AuthorFilter({
  authors,
  selected,
  onClick,
  max = 10,
}: AuthorFilterProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [showAll, setShowAll] = useState(false)

  if (max > -1 && !showAll) {
    authors = authors.slice(0, max)
  }

  return (
    <div className="text-sm">
      {/* <ToggleSwitch
        isSelected={showAll}
        onClick={onShowAll}
        className="font-bold"
      >
        Authors
      </ToggleSwitch> */}
      <ExpandTab
        title="Authors"
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ToggleSwitch
          className="mt-2 w-full"
          onClick={() => setShowAll(!showAll)}
          isSelected={showAll}
        >
          Show All
        </ToggleSwitch>
        <ul className="mt-2 flex flex-col gap-y-1">
          {authors.map((journal: any, index: number) => {
            return (
              <Journal
                index={index}
                journal={journal}
                isSelected={selected.has(journal[0])}
                key={index}
                onClick={onClick}
              />
            )
          })}
        </ul>
      </ExpandTab>
    </div>
  )
}

export default AuthorFilter
