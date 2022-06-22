import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import CustomSearchBox from './custom-search-box'
import CustomHits from './custom-hits'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
)

const Search = () => (
  <div>
    {/* <InstantSearch searchClient={searchClient} indexName="politeinvestor">
      <CustomSearchBox />
      <CustomHits />
    </InstantSearch> */}
  </div>
)

export default Search
