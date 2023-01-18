import { useState } from "react"
import { getShortName } from "../../lib/text"
import Accordion from "../accordion"
import ExpandTab from "../expand-tab"
import CheckBox from "../link/check-box"
import ToggleSwitch from "../link/toggle-switch"
import VCenterRow from "../v-center-row"

interface JournalProps {
  index: number
  journal: [string, number]
  isSelected: boolean
  onClick: (text: string, selected: boolean) => void
}

export function Journal({ index, journal, isSelected, onClick }: JournalProps) {
  return (
    <li>
      <CheckBox
        index={index}
        onClick={() => onClick(journal[0], !isSelected)}
        isSelected={isSelected}
        className="w-full"
      >
        <VCenterRow className="w-full justify-between">
          <span className="3xl:hidden">{getShortName(journal[0])}</span>
          <span className="hidden 3xl:block">{journal[0]}</span>
          <span>({journal[1]})</span>
        </VCenterRow>
      </CheckBox>

      {/* <CheckBox onChange={() => onClick(journal[0], !selected)} selected={selected}>{`${useElipsis(journal[0])} (${journal[1]})`}</CheckBox> */}
    </li>
  )
}

interface JournalFilterProps {
  journals: [string, number][]
  selected: Set<string>
  onClick: any
  max: number
}

function JournalFilter({
  journals,
  selected,
  onClick,
  max = 10,
}: JournalFilterProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [showAll, setShowAll] = useState(false)

  journals = journals.slice(
    0,
    isExpanded ? (showAll ? journals.length : max) : 0
  )

  return (
    <div className="text-sm">
      {/* <ToggleSwitch
        isSelected={showAll}
        onClick={onShowAll}
        className="text-sm font-bold"
      >
        Journals
      </ToggleSwitch> */}
      <Accordion
        title="Journals"
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
          {journals.map((journal: any, index: number) => {
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
      </Accordion>
      {/* <Button
        onClick={onShowAll}
        ariaLabel="Show more items"
        className={cn(BASE_BUTTON_CLS, "trans-ani-300 transition-transform w-full", [
          showAll,
          "rotate-180",
        ])}
      >
        <ChevronDownIcon className="w-3 stroke-slate-500 stroke-2" />
      </Button> */}
    </div>
  )
}

export default JournalFilter
