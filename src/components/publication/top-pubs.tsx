import * as React from "react"
import { useState } from "react"
import BaseRow from "../base-row"

type TopPubProps = {
  journal: any
  onClick: any
}

function TopPub({ journal, onClick }: TopPubProps) {
  const [hover, setHover] = useState(false)

  function mouseEnterHandler() {
    setHover(true)
  }

  function mouseLeaveHandler() {
    setHover(false)
  }
  return (
    <BaseRow
      className={`trans-ani mb-1 cursor-pointer justify-between rounded-full border border-solid px-3 py-1 text-sm ${
        hover
          ? " bg-cuimc-button-blue-5 border-cuimc-button-blue"
          : "border-gray-200 "
      }`}
      onClick={onClick}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div>{journal[0]}</div>
      <div>{journal[1]}</div>
    </BaseRow>
  )
}

type TopPubsProps = {
  topPubs: [string, number][]
  onPubClick: any
}

function TopPubs({ topPubs, onPubClick }: TopPubsProps) {
  return (
    <div>
      {/* <div>
      <h6 className="font-medium">Top Journals</h6>
    </div> */}
      <div>
        {topPubs.map((journal: any, index: number) => {
          return (
            <TopPub
              journal={journal}
              key={index}
              onClick={() => onPubClick(`"${journal[0]}"[journal]`)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TopPubs
