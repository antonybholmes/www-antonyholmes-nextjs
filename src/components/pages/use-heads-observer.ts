import { useEffect, useState, useRef } from "react"

export const useHeadsObserver = () => {
  const [activeId, setActiveId] = useState("")
  const observer = useRef()

  useEffect(() => {
    const handleObsever = (entries: any[]) => {
      entries
        .sort(
          (a, b) =>
            parseInt(b.target.id.substring(5)) -
            parseInt(a.target.id.substring(5))
        )
        .forEach(entry => {
          if (entry?.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
    }

    // @ts-ignore
    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-30% 0% -30% 0px",
    })

    const elements = document.querySelectorAll(".pub-year")

    elements.forEach(elem =>
      // @ts-ignore
      observer.current.observe(elem)
    )

    // @ts-ignore
    return () => observer.current?.disconnect()
  }, [])

  return { activeId }
}

export default useHeadsObserver
