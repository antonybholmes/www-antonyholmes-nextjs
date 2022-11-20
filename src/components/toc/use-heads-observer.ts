import { useEffect, useRef, useState } from "react"

export default function useHeadsObserver(query = "h1,h2,h3,h4") {
  const [activeId, setActiveId] = useState("")
  const observer = useRef()

  useEffect(() => {
    function handleObsever(entries: any[]) {
      entries.forEach(entry => {
        //console.log(entry)
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    // @ts-ignore
    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "0% 0% -90% 0px",
    })

    const elements = document
      .getElementsByClassName("main-content")[0]
      .querySelectorAll(query)

    elements.forEach(elem =>
      // @ts-ignore
      observer.current.observe(elem)
    )

    // @ts-ignore
    return () => observer.current?.disconnect()
  }, [])

  return { activeId }
}
