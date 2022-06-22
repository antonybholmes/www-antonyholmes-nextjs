// ./components/Search/CustomHits.js
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connectStateResults } from 'react-instantsearch-dom'
import BaseLink from '../link/base-link'
import VCenterRow from '../v-center-row'

interface IProps {
  searchState: any
  searchResults: any
}

const Hits = ({ searchState, searchResults }: IProps) => {
  const validQuery = searchState.query?.length >= 3

  if (validQuery) {
    return (
      <div
        className="absolute border border-gray-200 shadow-card rounded-md p-4 w-full bg-white"
        style={{ width: '400px' }}
      >
        {searchResults?.hits.length === 0 && (
          <p>Aw snap! No search results were found.</p>
        )}
        {searchResults?.hits.length > 0 && (
          <ol>
            {searchResults.hits.map((hit: any) => (
              <li key={hit.objectID}>
                <BaseLink href={hit.slug} aria={`Click to view article`}>
                  <VCenterRow className="justify-between bg-gray-50 rounded-md p-3 hover:bg-blue-300 hover:text-white  mb-1">
                    {hit.title}
                    <FontAwesomeIcon icon={faChevronRight} size="xs" />
                  </VCenterRow>
                </BaseLink>
              </li>
            ))}
          </ol>
        )}
      </div>
    )
  } else {
    return <></>
  }
}

export default connectStateResults(Hits)
