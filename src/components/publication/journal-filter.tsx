import { useState } from "react"
import ExpandIcon from "../../icons/expand"
import { getShortName } from "../../lib/text"
import AnchorButton from "../link/anchor-button"
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
      <AnchorButton
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full flex-row items-center gap-x-1 stroke-gray-900"
      >
        {/* <ChevronRightIcon
          className={cn("transition-ani w-3 stroke-2 transition-transform", [
            showAll,
            "rotate-90",
          ])}
        /> */}

        <ExpandIcon expanded={isExpanded} className="w-3 stroke-2" />

        <h2>Journals</h2>

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
        </>
      )}
      {/* <Button
        onClick={onShowAll}
        ariaLabel="Show more items"
        className={cn(BASE_BUTTON_CLS, "transition-ani transition-transform w-full", [
          showAll,
          "rotate-180",
        ])}
      >
        <ChevronDownIcon className="w-3 stroke-gray-500 stroke-2" />
      </Button> */}
    </div>
  )
}

export default JournalFilter
