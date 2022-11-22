import { useEffect, useRef, useState } from "react"
import ILink from "../../interfaces/link"
import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"
import VCenterCol from "../v-center-col"
import { gsap } from "gsap"
const BAR_WIDTH = "2px"

export const LINK_CLS = cn(
  "flex",
  "flex-row",
  "items-center",
  "justify-center",
  "relative",
  "whitespace-nowrap",
  "color-ani",
  "px-4 py-2",
  "rounded-lg",
  "border-2",
  "border-transparent"
)

type IProps = {
  link: ILink
  selected: boolean
  onClick?: any
}

export default function HeaderLink({ link, selected, onClick }: IProps) {
  const [hover, setHover] = useState(false)
  const [down, setDown] = useState(false)

  const lineRef = useRef(null)

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger)
    // }

    if (selected) {
      gsap.from("#line", {
        left: 0,
        width: "100%",
        delay: 0.2,
        duration: 0.2,
      })
    }
  }, [selected])

  return (
    <VCenterCol className="relative h-16 justify-center">
      <BaseLink
        href={link.url}
        ariaLabel={`View ${link.name}`}
        className={cn(LINK_CLS, [
          selected,
          " text-blue-600",
          [
            hover,
            [[down, "border-blue-600"], "bg-gray-100 text-gray-900"],
            "text-gray-600",
          ],
        ])}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
      >
        {link.name}
      </BaseLink>

      {selected && (
        <div
          id="line"
          className={cn("absolute bottom-0 bg-blue-600")}
          style={{
            left: "1rem",
            width: "calc(100% - 2rem)",
            height: BAR_WIDTH,
          }}
        />
      )}
    </VCenterCol>
  )
}
