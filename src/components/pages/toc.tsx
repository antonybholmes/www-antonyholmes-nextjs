import { useHeadsObserver } from "./use-heads-observer"
import { useEffect, useState } from "react"
import cn from "../../lib/class-names"

// https://github.com/Tammibriggs/table-of-content/tree/main/src

export const TableOfContents = () => {
  const [headings, setHeadings] = useState<any>([])
  const { activeId } = useHeadsObserver()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".pub-year")).map(
      (elem: any) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      })
    )
    setHeadings(elements)
  }, [])

  return (
    <nav className="sticky top-0 pt-4 text-sm font-bold">
      <ul>
        {headings.map((heading: any) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={e => {
                e.preventDefault()
                // @ts-ignore
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }}
              className={cn(
                "transition-color flex h-6 flex-row items-center border-l pl-4 duration-100",
                [
                  activeId === heading.id,
                  "border-black text-black",
                  "border-slate-200 text-slate-500",
                ]
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
