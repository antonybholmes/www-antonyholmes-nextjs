import { useEffect, useState } from "react"

import getBooleanSearch from "../lib/boolean-search"
import getJournalPublications from "../lib/pub/journal-publications"
import sortPublications from "../lib/pub/sort-publications"
import getTopAuthors from "../lib/top-authors"
import getTopJournals from "../lib/top-journals"
import SearchBar from "../components/search/searchbar"

//import BlueButton from "../link/blue-button"
import JournalFilter from "../components/publication/journal-filter"
import Publications from "../components/publication/publications"
import SortOrder from "../components/publication/sortby"

//import axios from "axios"
import BaseRow from "../components/base-row"

import VCenterRow from "../components/v-center-row"

import getAuthorPublications from "../lib/pub/author-publications"
import HCenterRow from "../components/h-center-row"
import Pagination from "../components/pagination"
import AuthorFilter from "../components/publication/author-filter"

import { RECORDS_PER_PAGE, TEXT_SHOW_MORE } from "../constants"
import SortIcon from "../icons/sort"
import ThreeQuarterLayout from "../layouts/three-quarter-layout"
import pubYearCount from "../lib/pub/pub-year-count"
import { getShortName } from "../lib/text"
import BaseCol from "../components/base-col"
import BlueRoundedButton from "../components/link/blue-rounded-button"
import ToggleSwitch from "../components/link/toggle-switch"
import PubRangeSlider from "../components/publication/pub-range-slider"
import { getSelectedPublications } from "../lib/api"

const EMPTY_QUERY = ""

//const RECORDS_PER_PAGE = [25, 50, 100, 200, 500, 1000]

export const PUB_API_URL = "/api/publications/lab.json"

function searchAuthors(q: string, publication: any) {
  for (let author of publication.authorList) {
    if (author.toLowerCase().includes(q)) {
      return true
    }
  }

  return false
}

export function search(query: any, publications: any[]): any[] {
  let ret: any = []

  let ql = query.text.toLowerCase()

  for (let publication of publications) {
    let found = false

    switch (query.field) {
      case "author":
        found = searchAuthors(ql, publication)
        break
      case "journal":
        found = publication.journal.toLowerCase() === ql
        break
      case "year":
        found = publication.year.toString() === ql
        break
      case "pmid":
        found = publication.pmid.toString() === ql
        break
      case "pmcid":
        found = publication.pmcid.toString() === ql
        break
      default:
        found = publication.pmid.toLowerCase().includes(ql)

        if (!found) {
          // try pmcid
          found = publication.pmcid.toLowerCase().includes(ql)
        }

        if (!found) {
          // try journal
          found = publication.title.toLowerCase().includes(ql)
        }

        if (!found) {
          // try journal
          found = publication.journal.toLowerCase().includes(ql)
        }

        if (!found) {
          // try authors
          found = searchAuthors(ql, publication)
        }

        // if (!found) {
        //   // try people
        //   for (let person of publication.peopleList) {
        //     //if (person.frontmatter.name.toLowerCase().includes(ql)) {
        //     if (person.toLowerCase().includes(ql)) {
        //       found = true
        //       break
        //     }
        //   }
        // }

        // if (!found) {
        //   // try id
        //   for (let person of publication.people) {
        //     if (person.frontmatter.personId.toLowerCase().includes(ql)) {
        //       found = true
        //       break
        //     }
        //   }
        // }

        if (!found) {
          // try year
          found = publication.year.toString().includes(ql)
        }

        break
    }

    if (found) {
      ret.push(publication)
    }
  }

  return ret
}

function booleanSearchAnd(s1: any, s2: any): any {
  const titles: Set<any> = new Set()

  s2.map((publication: any) => {
    titles.add(publication.title)
  })

  return s1.filter((publication: any) => {
    return titles.has(publication.title)
  })
}

function booleanSearchOr(s1: any, s2: any): any {
  const pubMap: any = {}

  s1.map((publication: any) => {
    if (!(publication.year in pubMap)) {
      pubMap[publication.year] = {}
    }

    if (!(publication.month in pubMap[publication.year])) {
      pubMap[publication.year][publication.month] = {}
    }

    pubMap[publication.year][publication.month][publication.title] = publication
  })

  s2.map((publication: any) => {
    if (!(publication.year in pubMap)) {
      pubMap[publication.year] = {}
    }

    if (!(publication.month in pubMap[publication.year])) {
      pubMap[publication.year][publication.month] = {}
    }

    if (!(publication.title in pubMap[publication.year][publication.month])) {
      pubMap[publication.year][publication.month][publication.title] =
        publication
    }
  })

  const ret = []

  for (let year of Object.keys(pubMap).sort().reverse()) {
    for (let month of Object.keys(pubMap[year]).sort().reverse()) {
      for (let title of Object.keys(pubMap[year][month])) {
        ret.push(pubMap[year][month][title])
      }
    }
  }

  return ret
}

function results(search: string, page: number, filteredPublications: any[]) {
  if (filteredPublications.length === 0) {
    return `Your search for ${getShortName(search)} retrieved no results`
  }

  const x = page + 1
  const y = filteredPublications.length
  const suffix = filteredPublications.length !== 1 ? "results" : "result"

  if (y > x) {
    return `Page ${x} of ${y} ${suffix}`
  } else {
    return `${y} ${suffix}`
  }
}

interface IProps {
  publications: any[]
}

export default function Page({ publications }: IProps) {
  //const [publications, setPublications] = useState<any[]>([])

  const [journals, setJournals] = useState<any[]>([])

  const [authors, setAuthors] = useState<any[]>([])

  const [query, setQuery] = useState(EMPTY_QUERY)
  const [sortOrder, setSortOrder] = useState("Publication Date")
  //const [journals, setJournals] = useState<Array<[string, number]>>(useTopJournals(pubs))
  const [selectedJournals, setSelectedJournals] = useState<Set<string>>(
    new Set<string>()
  )

  const [selectedAuthors, setSelectedAuthors] = useState<Set<string>>(
    new Set<string>()
  )

  const [showAbstract, setShowAbstract] = useState(false)
  const [expandAll, setExpandAll] = useState(false)
  //const [instituteOnly, setInstituteOnly] = useState(true)
  const [firstAuthorOnly, setFirstAuthorOnly] = useState(true) //id === "all")
  const [descending, setDescending] = useState(true)

  const [searchFilteredPublications, setSearchFilteredPublications] = useState<
    any[]
  >([])

  const [yearFilteredPublications, setYearFilteredPublications] = useState<
    any[]
  >([])

  const [sortedPublications, setSortedPublications] = useState<any[]>([])

  const [pagePublications, setPagePublications] = useState<any[]>([])

  const [pageStart, setPageStart] = useState(-1)
  const [pageEnd, setPageEnd] = useState(-1)
  const [pages, setPages] = useState(-1)

  const [yearData, setYearData] = useState<any[]>([])
  const [year1, setYear1] = useState(-1)
  const [year2, setYear2] = useState(-1)

  const [recordsPerPage, setRecordsPerPage] = useState(RECORDS_PER_PAGE)

  const [showAll, setShowAll] = useState(false)

  // function fetchData() {
  //   axios
  //     .get(PUB_API_URL)
  //     .then(res => {
  //       setPublications(res.data)
  //     })
  //     .catch(err => {
  //       // do nothing console.log(err)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  //   //setPublications(allPublications)
  // }, [])

  useEffect(() => {
    setAuthors(getTopAuthors(publications))
    setJournals(getTopJournals(publications))
  }, [])

  useEffect(() => {
    //setPage(0)
    // setPages(
    //  Math.floor(
    //     (searchFilteredPublications.length + recordsPerPage - 1) / recordsPerPage
    //  )
    //)

    //setPagePublications(searchFilteredPublications.slice(0, recordsPerPage))

    setYearData(pubYearCount(searchFilteredPublications))
  }, [searchFilteredPublications])

  useEffect(() => {
    setYear1(0)
    setYear2(yearData.length - 1)
  }, [yearData])

  useEffect(() => {
    if (publications.length > 0 && yearData.length > 0) {
      setYearFilteredPublications(
        searchFilteredPublications.filter(publication => {
          return (
            publication.year >= yearData[year1].name &&
            publication.year <= yearData[year2].name
          )
        })
      )
    } else {
      setYearFilteredPublications([])
    }

    setPageStart(0)
    setPageEnd(0)
  }, [year1, year2])

  useEffect(() => {
    setSortedPublications(
      sortPublications(yearFilteredPublications, sortOrder, descending)
    )
  }, [yearFilteredPublications, sortOrder, descending])

  useEffect(() => {
    setPages(
      Math.floor(
        (sortedPublications.length + recordsPerPage - 1) / recordsPerPage
      )
    )

    updatePagePublications()
  }, [sortedPublications])

  useEffect(() => {
    updatePagePublications()
  }, [pageStart, pageEnd])

  const updatePagePublications = () => {
    const s1 = pageStart * recordsPerPage
    const s2 = pageEnd * recordsPerPage
    setPagePublications(sortedPublications.slice(s1, s2 + recordsPerPage))
  }

  // useEffect(() => {
  //   setRecordsPerPage(recordsPerPage[recordsPerPageIndex])
  // }, [recordsPerPageIndex])

  useEffect(() => {
    if (query !== "") {
      updateFilteredPublications(
        getBooleanSearch(
          query,
          publications,
          search,
          booleanSearchAnd,
          booleanSearchOr
        )
      )
    } else {
      updateFilteredPublications(publications)
    }
  }, [query, firstAuthorOnly, selectedJournals, selectedAuthors, publications])

  // // If pubs are populated or user applies a filter, update
  // useEffect(() => {
  //   updatePublications()
  //   //setRecordsPerPage(recordsPerPage)
  // }, [
  //   pubs,
  //   selected,
  //   instituteOnly,
  //   firstAuthorOnly,
  //   sortOrder,
  //   descending,
  // ])

  function updateFilteredPublications(publications: any[]) {
    // if (instituteOnly) {
    //   pubs = getInstitutePublications(pubs)
    // }

    // if (firstAuthorOnly) {
    //   pubs = useFirstAuthorPublications(pubs)
    // }

    if (selectedJournals.size > 0) {
      publications = getJournalPublications(publications, selectedJournals)
    }

    if (selectedAuthors.size > 0) {
      publications = getAuthorPublications(publications, selectedAuthors)
    }

    setSearchFilteredPublications(publications)
  }

  function onSearch(text: string, clicked: boolean) {
    if (clicked) {
      setQuery(text)
    }
  }

  function onSortChange(value: string) {
    setSortOrder(value)
  }

  function onShowAbstractChange(selected: boolean) {
    setShowAbstract(selected)
  }

  function onFirstAuthorOnlyChange(selected: boolean) {
    setFirstAuthorOnly(selected)
  }

  function onPageChanged(page: number) {
    setPageStart(page - 1)
    setPageEnd(page - 1)
  }

  function showMoreOnClick() {
    setPageEnd(Math.min(pageEnd + 1, pages - 1))
  }

  function onJournalClick(journal: string, selected: boolean) {
    //setQuery(journal)

    let sj = new Set(selectedJournals)

    if (selected) {
      sj.add(journal)
    } else {
      sj.delete(journal)
    }

    setSelectedJournals(sj)
  }

  function onAuthorClick(author: string, selected: boolean) {
    //setQuery(journal)

    let sa = new Set(selectedAuthors)

    if (selected) {
      sa.add(author)
    } else {
      sa.delete(author)
    }

    setSelectedAuthors(sa)
  }

  //const hasSearchResults = query !== EMPTY_QUERY
  //let publications: any[] = hasSearchResults
  ///  ? filteredPublications
  // : pubs

  //let yearFilteredPublications = filteredPublications

  // if (filterYears.length > 0 && filterYears[0] !== -1) {
  //   yearFilteredPublications = publications.filter((publication: any) {
  //     return filterYears.includes(publication.year)
  //   })
  // } else {
  //   yearFilteredPublications = publications
  // }

  //const offset = (page - 1) * recordsPerPageIndex

  // let pagedPublications = filteredPublications.slice(
  //   offset,
  //   offset + recordsPerPage
  // )

  return (
    <ThreeQuarterLayout
      title="Publications"
      headerChildren={
        <SearchBar
          onSearch={onSearch}
          placeholder="Search publications..."
          text={query}
          className="hidden grow lg:flex"
        />
      }
      crumbs={[["Publications", "/publications"]]}
      className="mb-32 gap-x-16"
    >
      <div>
        <VCenterRow className="justify-between">
          <span className="text-sm text-slate-500">
            {results(query, pageStart, yearFilteredPublications)}
          </span>
          <ToggleSwitch
            onClick={() => setShowAbstract(!showAbstract)}
            isSelected={showAbstract}
            className="text-sm"
          >
            Show Abstracts
          </ToggleSwitch>
        </VCenterRow>

        <Publications
          publications={pagePublications}
          showAbstract={showAbstract}
          showCount={true}
          className="mt-8"
          page={pageStart}
          pageBreak={recordsPerPage}
        />

        {pageStart < pages - 1 && (
          <HCenterRow className="mt-8">
            <div>
              <BlueRoundedButton
                ariaLabel={TEXT_SHOW_MORE}
                onClick={showMoreOnClick}
                className="px-4 py-2"
              >
                {TEXT_SHOW_MORE}
              </BlueRoundedButton>
            </div>
          </HCenterRow>
        )}

        {yearFilteredPublications.length > recordsPerPage && (
          <HCenterRow className="mt-16">
            <Pagination
              page={pageEnd + 1}
              pages={pages}
              onClick={onPageChanged}
            />
          </HCenterRow>
        )}
      </div>

      <BaseCol className="gap-y-6 text-sm">
        {/* <ToggleSwitch
                isSelected={showAbstract}
                onClick={onShowAbstractsChange}
              >
                Show Abstracts
              </ToggleSwitch> */}

        {yearData.length > 0 && (
          <PubRangeSlider
            data={yearData}
            r1={year1}
            setYear1={setYear1}
            r2={year2}
            setYear2={setYear2}
          />
        )}

        <div>
          <VCenterRow className="justify-between">
            <h2>Sort</h2>
            <BaseRow className="overflow-hidden">
              <button
                aria-label="Sort ascending"
                onClick={() => setDescending(!descending)}
                className="flex h-6 w-6 flex-row items-center justify-center  transition-colors "
              >
                <SortIcon className="w-4" descending={descending} />
              </button>
            </BaseRow>
          </VCenterRow>

          <SortOrder onChange={onSortChange} selected={sortOrder} />
        </div>

        <JournalFilter
          journals={journals}
          selected={selectedJournals}
          onClick={onJournalClick}
          max={8}
        />

        <AuthorFilter
          authors={authors.slice(0, 20)}
          selected={selectedAuthors}
          onClick={onAuthorClick}
          max={8}
        />
      </BaseCol>
    </ThreeQuarterLayout>
  )
}

export async function getStaticProps() {
  const publications = getSelectedPublications("antony-holmes")

  return {
    props: {
      publications,
    },
  }
}
