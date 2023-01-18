import { useRef, useState } from "react"
import HCenterCol from "../h-center-col"
import SecondaryButton from "../link/secondary-button"
import VCenterRow from "../v-center-row"

function Bar({ x, y, height, width, isColored, isHighlighted }) {
  return (
    <rect
      fill={
        isColored ? (isHighlighted ? "url('#g2')" : "url('#g1')") : "#d1d5db"
      }
      x={x}
      y={y}
      height={height}
      width={width}
    />
  )
}

function YearSelector({ x, y, r = 8, onMouseUp, onMouseDown }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className="cursor-pointer fill-white stroke-emerald-400 stroke-2"
    />
  )
}

export default function PubRangeSlider({
  data,
  barWidth = 6,
  barMargin = 1,
  height = 80,
  sliderHeight = 50,
  xMargin = 40,
  yMax = -1,
  r1,
  setYear1,
  r2,
  setYear2,
}) {
  const ref = useRef(null)
  const refHint = useRef(null)
  const [highlightIdx, setHighlightIdx] = useState(-1)

  if (yMax === -1) {
    yMax = Math.max(...data.map((x: any) => x.value))
  }

  const halfBarWidth = Math.floor(barWidth / 2)
  const barW = barWidth + barMargin
  const plotWidth = data.length * barW
  const width = plotWidth + 2 * xMargin
  const scaleFactor = height / yMax

  const x1 = xMargin + halfBarWidth + r1 * barW
  const x2 = xMargin + halfBarWidth + r2 * barW
  const y = height + 5

  function onMouseMoveYear1(e: any) {
    const p = Math.floor((e.offsetX - xMargin) / barW)
    setYear1(Math.max(0, Math.min(p, data.length - 1)))
  }

  function onMouseDownYear1(e: any) {
    // @ts-ignore
    window.addEventListener("mousemove", onMouseMoveYear1)
    window.addEventListener("mouseup", onMouseUpYear1)
  }

  function onMouseUpYear1() {
    // @ts-ignore
    window.removeEventListener("mousemove", onMouseMoveYear1)
    window.removeEventListener("mouseup", onMouseUpYear1)
  }

  function onMouseMoveYear2(e: any) {
    const p = Math.floor((e.offsetX - xMargin) / barW)

    setYear2(Math.max(r1, Math.min(data.length - 1, p)))
  }

  function onMouseDownYear2(e: any) {
    // @ts-ignore
    window.addEventListener("mousemove", onMouseMoveYear2)
    window.addEventListener("mouseup", onMouseUpYear2)
  }

  function onMouseUpYear2() {
    // @ts-ignore
    window.removeEventListener("mousemove", onMouseMoveYear2)
    window.removeEventListener("mouseup", onMouseUpYear2)
  }

  const onMouseEnter = (e: any) => {
    // @ts-ignore
    refHint.current.style.visibility = "visible"
  }

  function onMouseMove(e: any) {
    if (e.nativeEvent.offsetY < height) {
      // @ts-ignore
      refHint.current.style.visibility = "visible"

      const idx = Math.max(
        0,
        Math.min(
          data.length - 1,
          Math.floor((e.nativeEvent.offsetX - xMargin) / barW)
        )
      )
      const p = idx * barW + halfBarWidth + xMargin

      // @ts-ignore
      refHint.current.style.left = `${p}px`
      // @ts-ignore
      refHint.current.innerText = `${data[idx].name}: ${data[idx].value}`

      setHighlightIdx(idx)
    } else {
      // @ts-ignore
      refHint.current.style.visibility = "hidden"
    }
  }

  function onMouseLeave() {
    // @ts-ignore
    refHint.current.style.visibility = "hidden"

    setHighlightIdx(-1)
  }

  function onClick(e: any) {
    const idx = Math.max(
      0,
      Math.min(
        data.length - 1,
        Math.floor((e.nativeEvent.offsetX - xMargin) / barW)
      )
    )

    setYear1(idx)
    setYear2(idx)
  }

  function onResetClick() {
    setYear1(0)
    setYear2(data.length - 1)
  }

  let text1 = <></>

  if (r1 > -1 && r1 < data.length && r2 > -1 && r2 < data.length) {
    if (x2 - x1 > 50) {
      text1 = (
        <text x={x1} y={y + 25} textAnchor="middle">
          {data[r1].name}
        </text>
      )
    } else {
      if (x1 === x2) {
        // slider for 1 year so only 1 label required
        text1 = (
          <text x={(x1 + x2) / 2} y={y + 25} textAnchor="middle">
            {`${data[r1].name} `}
          </text>
        )
      } else {
        text1 = (
          <text x={(x1 + x2) / 2} y={y + 25} textAnchor="middle">
            {`${data[r1].name}-${data[r2].name}`}
          </text>
        )
      }
    }
  }

  let text2 = <></>

  if (r2 > -1 && r2 < data.length && x2 - x1 > 50) {
    text2 = (
      <text x={x2} y={y + 25} textAnchor="middle">
        {data[r2].name}
      </text>
    )
  }

  return (
    <div className="w-full">
      <VCenterRow className="justify-between">
        <SecondaryButton
          onClick={onResetClick}
          ariaLabel="Reset year range"
          className="py-1 px-2"
        >
          Reset
        </SecondaryButton>
      </VCenterRow>
      <HCenterCol>
        <div className="relative pb-8">
          <svg
            width={width}
            height={height + sliderHeight}
            className="mt-4 cursor-pointer text-xs"
            ref={ref}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
          >
            <defs>
              <linearGradient id="g1" gradientTransform="rotate(90)">
                <stop offset="5%" stopColor="#10b981" />
                <stop offset="95%" stopColor="#34d399" />
              </linearGradient>

              <linearGradient id="g2" gradientTransform="rotate(90)">
                <stop offset="5%" stopColor="#059669" />
                <stop offset="95%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            {data.map((datum: { value: number }, index: number) => {
              const h = datum.value * scaleFactor
              return (
                <Bar
                  key={index}
                  x={xMargin + index * barW}
                  y={height - h}
                  width={barWidth}
                  height={h}
                  isColored={index >= r1 && index <= r2}
                  isHighlighted={index === highlightIdx}
                />
              )
            })}

            {/* x axis */}
            <line
              x1={xMargin}
              x2={xMargin + plotWidth}
              y1={y}
              y2={y}
              className="stroke-slate-300 stroke-2"
            />

            {r1 > -1 && r2 >= r1 && (
              <line
                x1={x1}
                x2={x2}
                y1={y}
                y2={y}
                className="stroke-emerald-400 stroke-2"
              />
            )}

            {r1 > -1 && (
              <YearSelector
                key={r1}
                x={x1}
                y={y}
                onMouseUp={onMouseUpYear1}
                onMouseDown={onMouseDownYear1}
              />
            )}

            {r2 >= r1 && (
              <YearSelector
                key={data.length + r2}
                x={x2}
                y={y}
                onMouseUp={onMouseUpYear2}
                onMouseDown={onMouseDownYear2}
              />
            )}

            {text1}

            {text2}
          </svg>
          <div ref={refHint} className="hint invisible" />
        </div>
      </HCenterCol>
    </div>
  )
}
