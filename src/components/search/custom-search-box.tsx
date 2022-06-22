import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import cn from '../../lib/class-names'
import VCenterRow from '../v-center-row'

interface IProps {
  refine: any
}

const SearchBox = ({ refine }: IProps) => {
  const [val, setVal] = useState('')

  const _handleOnChange = (e: any) => {
    setVal(e.currentTarget.value)
  }

  useEffect(() => {
    refine(val)
  }, [val])

  const _handleOnClick = () => {
    setVal('')
  }

  return (
    <VCenterRow className="relative justify-between  text-sm rounded-md text-gray-400 w-96">
      <VCenterRow>
        <FontAwesomeIcon icon={faSearch} className="mr-2" />
        <form action="" role="search">
          <input
            id="algolia_search"
            type="search"
            placeholder="Quick search..."
            onChange={e => _handleOnChange(e)}
            value={val}
            className="border-none outline-none"
          />
        </form>
      </VCenterRow>
      <button
        onClick={_handleOnClick}
        className={cn('border shadow text-xs p-1 rounded-md uppercase', [
          val !== '',
          'visible',
          'invisible',
        ])}
      >
        Esc
      </button>
    </VCenterRow>
  )
}

export default connectSearchBox(SearchBox)
