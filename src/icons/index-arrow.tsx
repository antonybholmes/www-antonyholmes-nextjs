import type IIconProps from "../interfaces/icon-props"

interface IProps extends IIconProps {
  selected?: boolean
}

export default function IndexArrow({ selected = false, className }: IProps) {
  //const lineRef = useRef(null)
  //const arrowRef = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       arrowRef.current,
  //       {
  //         x: selected ? "2px" : 0,
  //         duration: DURATION,
  //       },
  //       0
  //     )
  //     .to(
  //       lineRef.current,
  //       {
  //         scaleX: selected ? 1 : 0,
  //         opacity: selected ? 1 : 0,
  //         duration: DURATION,
  //       },
  //       0
  //     )
  // }, [selected])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      <line
        x1="4"
        y1="9"
        x2="11"
        y2="9"
        className="trans-ani-300 opacity-0 transition-opacity group-hover:opacity-100"
      />
      <path
        d="M 6,5 L 10,9 L 6,13"
        className="trans-ani-300 transition-transform group-hover:translate-x-0.5"
      />
    </svg>
  )
}
