import * as React from "react"

function Span({ children, key, className }) {
  return (
    <span key={key} className={`whitespace-pre-wrap ${className}`}>
      {children}
    </span>
  )
}

function SearchHighlight({ text, words, highlightClassName }) {
  //const [blocks, setBlocks] = useState([])

  const tl = text.toLowerCase()

  // useEffect(() => {
  const startMap = new Map()

  for (let word of words) {
    if (word !== "") {
      const index = tl.indexOf(word)

      if (index !== -1) {
        startMap.set(index, word)
      }
    }
  }

  // Order the starts
  const starts = Array.from(startMap.keys()).sort()

  let s = 0
  let e = 0

  const blocks = []

  for (let i = 0; i < starts.length; ++i) {
    const start = starts[i]
    s = start
    e = start + startMap.get(start).length

    // Prevent overlaps. Since starts are in order
    // Check if previous block overlaps with this one.
    // If it does, update previous block to have this
    // block's end position
    if (i > 0) {
      if (s < blocks[i - 1][1]) {
        blocks[i - 1][1] = e
        continue
      }
    }

    blocks.push([s, e])
  }

  const ret = []
  s = 0
  e = 0

  let c = 0

  for (let block of blocks) {
    ret.push(
      <Span key={`span-${c++}`} className="text">
        {text.substring(s, block[0])}
      </Span>
    )
    ret.push(
      <Span key={`span-${c++}`} className={highlightClassName}>
        {text.substring(block[0], block[1])}
      </Span>
    )

    s = block[1]
  }

  // Add on substring at end
  if (s < text.length) {
    ret.push(
      <Span key={`span-${c++}`} className="text">
        {text.substring(s)}
      </Span>
    )
  }

  return <>{ret}</>
}

SearchHighlight.defaultProps = {
  words: [],
  highlightClassName: "text-default-blue font-medium",
}

export default SearchHighlight
