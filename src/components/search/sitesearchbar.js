import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
import Row from "../row"

function SiteSearchBar({
  handleInputChange,
  handleKeyDown,
  placeholder,
  text,
  className,
  selected,
}) {
  const [hover, setHover] = useState(false)
  const [expanded, setExpanded] = useState(false)

  let barEl = useRef(null)
  let inputEl = useRef(null)

  useEffect(() => {
    gsap
      .timeline()
      .to(
        barEl.current,
        0.5,
        {
          background: expanded ? "white" : "transparent",
          ease: "power3.inOut",
        },
        0
      )
      .to(
        barEl.current,
        0.5,
        { width: expanded ? "100%" : "5rem", ease: "power3.inOut" },
        0.1
      )
      .to(
        inputEl.current,
        0.5,
        { opacity: expanded ? 1 : 0, ease: "power3.inOut" },
        0.1
      )
  }, [expanded])

  function onMouseEnter(e) {
    setHover(true)
  }

  function onMouseLeave(e) {
    setHover(false)
  }

  function onClick(e) {
    setExpanded(!expanded)
  }

  function onFocus(e) {
    setHover(true)
  }

  function onBlur(e) {
    setHover(false)
  }

  //"bg-white border-gray-300"
  // "bg-gray-200 border-gray-200"

  return (
    <Row
      w="w-full"
      className={`trans-ani items-center justify-between rounded-full px-5 py-2 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      ref={barEl}
    >
      <div className="w-full">
        <input
          type="text"
          aria-label="Search"
          placeholder={placeholder}
          value={text}
          onChange={handleInputChange}
          className={`w-full border-none bg-transparent outline-none`}
          ref={inputEl}
        />
      </div>
      <div>
        <SearchIcon
          className={`cursor-pointer ${
            expanded ? "text-blue-600" : hover ? "text-white" : "text-white-60"
          } trans-ani ml-2 text-lg`}
          onClick={onClick}
        />
      </div>
    </Row>
  )
}

export default SiteSearchBar
