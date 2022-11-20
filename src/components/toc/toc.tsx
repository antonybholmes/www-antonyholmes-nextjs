import { useEffect, useState } from "react"
import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import useHeadsObserver from "./use-heads-observer"

// https://github.com/Tammibriggs/table-of-content/tree/main/src

interface IProps extends IClassProps {
  query?: string
}

export default function TableOfContents({
  query = "h1,h2,h3,h4",
  className,
}: IProps) {
  const [headings, setHeadings] = useState<any>([])
  const { activeId } = useHeadsObserver(query)

  useEffect(() => {
    const elements = Array.from(
      document.getElementsByClassName("main-content")[0].querySelectorAll(query)
    ).map((elem: any) => ({
      id: elem.id,
      text: elem.innerText,
    }))
    setHeadings(elements)
  }, [])

  return (
    <nav className={cn("sticky top-0 pt-20", className)}>
      {/* <h2 className="font-medium">On this page</h2> */}
      <ul className="flex flex-col">
        {headings.map((heading: any) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={e => {
                e.preventDefault()
                // @ts-ignore
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
              className={cn(
                "color-ani flex h-8 flex-row items-center border-l-2 pl-3",
                [
                  activeId === heading.id,
                  "border-gray-900 font-medium text-gray-900",
                  "border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900",
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
