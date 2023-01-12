import { useState } from "react"
import ExpandIcon from "../../icons/expand"
import AnchorButton from "../link/anchor-button"
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
      <AnchorButton
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full flex-row items-center gap-x-1 stroke-gray-900"
      >
        <ExpandIcon expanded={isExpanded} className="w-3 stroke-2" />

        <h2>Authors</h2>

        {/* <PlusIcon isPlus={!showAll} className="w-4 stroke-2" /> */}
      </AnchorButton>
      {isExpanded && (
        <>
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
        </>
      )}
    </div>
  )
}

export default AuthorFilter
