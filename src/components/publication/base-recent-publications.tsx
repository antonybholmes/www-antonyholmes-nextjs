/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useEffect, useState } from "react"
import { TEXT_SHOW_MORE } from "../../constants"
import HCenterRow from "../h-center-row"
import BlueButton from "../link/blue-button"
import VCenterRow from "../v-center-row"
import BasePublicationList from "./base-publication-list"

const RECORDS_PER_PAGE = 25

type RecentPublicationsProps = {
  publications: any[]
  showAbstract: boolean
  top?: number
  showCount?: boolean
  className?: string
}

function BaseRecentPublications({
  publications,
  showAbstract,
  top = 15,
  showCount,
  className,
}: RecentPublicationsProps) {
  const [filteredPublications, setFilteredPublications] = useState<any[]>([])
  const [recordsPerPage, setRecordsPerPage] = useState(-1)

  useEffect(() => {
    updatePublications()
  }, [])

  useEffect(() => {
    if (recordsPerPage != top) {
      setRecordsPerPage(top)
    } else {
      updatePublications()
    }
  }, [publications])

  useEffect(() => {
    updatePublications()
  }, [recordsPerPage])

  function updatePublications() {
    setFilteredPublications(publications.slice(0, recordsPerPage))
  }

  function handleShowMoreClick() {
    setRecordsPerPage(2 * recordsPerPage)
  }

  return (
    <>
      {publications.length > 0 && showCount && (
        <VCenterRow className="mb-8 justify-between">
          <div>
            {/* {`Showing ${Math.min(
              filteredPublications.length,
              recordsPerPage
            )} of ${publications.length} ${
              filteredPublications.length > 1 ? "publications" : "publication"
            }`} */}

            {`${publications.length} ${
              publications.length !== 1 ? "results" : "result"
            }`}
          </div>
        </VCenterRow>
      )}

      <div className={`${className}`}>
        <BasePublicationList
          publications={filteredPublications}
          showAbstract={showAbstract}
        />
      </div>

      {recordsPerPage < publications.length && (
        <HCenterRow className="mt-8">
          <div>
            <BlueButton
              ariaLabel={TEXT_SHOW_MORE}
              onClick={handleShowMoreClick}
            >
              {TEXT_SHOW_MORE}
            </BlueButton>
          </div>
        </HCenterRow>
      )}
    </>
  )
}

export default BaseRecentPublications
