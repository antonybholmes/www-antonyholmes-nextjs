import * as React from "react"
import { useState, useEffect, useRef } from "react"
import BlueLink from "../buttons/bluelink"
import SearchHighlight from "./searchhighlight"
import { searchTree } from "./searchtree"
import { Link } from "gatsby"

export function SiteLink({ to, link }) {
  if (to.includes("http")) {
    return (
      <BlueLink target="_blank" to={to}>
        {link}
      </BlueLink>
    )
  } else {
    return <BlueLink to={to}>{link}</BlueLink>
  }
}

function SiteSearchResult({ text, to, selected }) {
  const linkEl = useRef(null)

  function click() {
    linkEl.current.click()
  }

  return (
    <Link ref={linkEl} to={to} className="m-0 p-0">
      <div
        className={`cursor-pointer px-4 py-2 ${
          selected ? "bg-gray-200" : "hover:bg-gray-200"
        } trans-ani`}
      >
        {text}
      </div>
      {/* <Row className="px-4 py-2 cursor-pointer hover:bg-gray-200 trans-ani">
        <Row w="7" className="mr-4">
          <div>{text}</div>
        </Row>
        <Row w="5">
          <div>{link}</div>
        </Row>
      </Row> */}
    </Link>
  )
}

SiteSearchResult.defaultProps = {
  selected: false,
}

export function Heading({ name }) {
  return (
    <div className="mb-2 px-4 pt-4 text-sm font-medium text-gray-600">
      {name}
    </div>
  )
}

/**
 * If user clicks outside search, causes it to close
 * @param {*} showMenu    whether to show the menu or not
 * @param {*} handleClickEvent    allows menu to be closed
 */
function SiteSearchMenuPane({ showMenu, handleClickEvent }) {
  return (
    <div
      onClick={handleClickEvent}
      className={`fixed left-0 top-0 z-30 h-screen w-screen bg-transparent
        ${showMenu ? "block" : "hidden"}
      }`}
    />
  )
}

function SiteSearchMenu({ showMenu, selectedIndex, children }) {
  return (
    <div
      className={`absolute z-100 m-0 w-full overflow-hidden rounded-md border border-solid border-gray-200 bg-white p-0 shadow-md outline-none ${
        showMenu ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  )
}

export function getSiteData() {
  return axios.get("/site.index.json").then(resp => {
    return resp.data
  })
}

function SiteSearch({ className, placeholder = "", maxResults = 10 }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [searchItems, setSearchItems] = useState([])
  const [showMenu, setShowMenu] = useState(false)
  const [siteData, setSiteData] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [redirect, setRedirect] = useState("")

  useEffect(() => {
    if (query !== "") {
      if (siteData !== null) {
        search()
      } else {
        getSiteData().then(data => {
          setSiteData(data)
        })
      }
    } else {
      if (showMenu) {
        setShowMenu(false)
      }
    }
  }, [query])

  useEffect(() => {
    search()
  }, [siteData])

  useEffect(() => {
    updateSearchResults()
  }, [searchItems])

  useEffect(() => {
    updateSearchResults()
  }, [selectedIndex])

  function updateSearchResults() {
    if (searchItems.length > 0) {
      const [items, words] = searchItems

      // Init refs

      if (items.length > 0) {
        let c = 0
        let currentSection = ""
        let ret = []
        let searchComps = []

        for (let index = 0; index < items.length; ++index) {
          const item = items[index]

          let link = siteData.links[item]

          const name = link[0]
          const section = siteData.sections[link[1]]

          const nl = link[0].toLowerCase()

          // first the first match in the string and highlight that

          // The index of a match cannot exceed 100, so anything
          // we find must be smaller
          let minP = 100

          let sectionComp = null
          let resultComp = null

          for (let word of words) {
            const p = nl.indexOf(word)

            if (p !== -1 && p < minP) {
              if (section !== currentSection && sectionComp === null) {
                sectionComp = <Heading key={`heading-${c}`} name={section} />
                currentSection = section
              }

              resultComp = (
                <SiteSearchResult
                  key={`result-${c}`}
                  text={<SearchHighlight text={name} words={words} />}
                  to={link[2]}
                  selected={index === selectedIndex}
                />
              )

              minP = p
            }
          }

          // If we found a match render components

          if (sectionComp !== null) {
            ret.push(sectionComp)
          }

          if (resultComp !== null) {
            ret.push(resultComp)
            searchComps.push(resultComp)
            ++c
          }

          // limit displayed results for performance
          if (c === maxResults) {
            break
          }
        }

        if (!showMenu) {
          // Reset search
          setSelectedIndex(-1)
          setShowMenu(true)
        }

        setResults(ret)
      } else {
        if (showMenu) {
          setShowMenu(false)
        }
      }
    }
  }

  function search() {
    let node
    let found

    if (siteData === null || query === null) {
      return
    }

    //const [items, words] = searchTree(siteData.tree, query)

    setSearchItems(searchTree(siteData.tree, query)) //[items, words])
  }

  function handleInputChange(e) {
    const q = e.target.value
    //const ql = q.toLowerCase()

    setQuery(q)

    // for (let section of searchData["sections"]) {
    //   let needsHeader = true

    //   for (let name of Object.keys(searchData["data"][section]).sort()) {
    //     const nl = name.toLowerCase()

    //     const p = nl.indexOf(ql)

    //     if (p !== -1) {
    //       if (needsHeader) {
    //         ret.push(<Heading name={section} />)
    //         needsHeader = false
    //       }
    //       const s1 = name.substring(0, p)
    //       const s2 = name.substring(p, p + ql.length)
    //       const s3 = name.substring(p + ql.length)

    //       ret.push(
    //         <SiteSearchResult key={c}
    //           s1={s1}
    //           s2={s2}
    //           s3={s3}
    //           link={searchData["data"][section][name]}
    //         />
    //       )

    //       ++c

    //       if (c === maxResults) {
    //         stop = true
    //         break
    //       }
    //     }
    //   }
    //   if (stop) {
    //     break
    //   }
    // }

    // setResults(ret)
  }

  function handleClickEvent(e) {
    if (showMenu) {
      setShowMenu(false)
    }
  }

  function onKeyDown(e) {
    if (e.keyCode === 38 || e.keyCode === 37) {
      setSelectedIndex(Math.max(-1, selectedIndex - 1))
    }

    if (e.keyCode === 40 || e.keyCode === 39) {
      setSelectedIndex(Math.min(searchItems[0].length - 1, selectedIndex + 1))
    }

    // Press enter, simulate click to another page
    if (e.keyCode === 13) {
      if (selectedIndex > -1 && selectedIndex < searchItems[0].length) {
        const items = searchItems[0]

        const item = items[selectedIndex]

        const link = siteData.links[item]

        const to = link[3]

        setRedirect(to)
      }
    }
  }

  return (
    <>
      {redirect !== "" && <Redirect to={redirect} noThrow />}
      <HideSmall size="md" className="w-3/10 relative">
        <SiteSearchBar
          handleInputChange={handleInputChange}
          handleKeyDown={onKeyDown}
          text={query}
          placeholder={placeholder}
          border={false}
          selected={showMenu}
          className="w-6/10 ml-auto"
        />

        <SiteSearchMenuPane
          showMenu={showMenu}
          handleClickEvent={handleClickEvent}
        />
        <SiteSearchMenu
          showMenu={showMenu}
          selectedIndex={selectedIndex}
          className="w-1/2"
        >
          {results}
        </SiteSearchMenu>
      </HideSmall>
    </>
  )
}

export default SiteSearch
