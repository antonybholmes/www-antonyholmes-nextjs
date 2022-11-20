function Chart({ children, height, width }) {
  return (
    <svg width={width} height={height} className="border">
      <defs>
        <linearGradient id="tealGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="cornflowerblue" />
          <stop offset="95%" stopColor="teal" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  )
}

function Bar({ datum, x, y, height, width, onClick, isColored }) {
  return (
    <rect
      fill={isColored ? "url('#tealGradient')" : "gray"}
      x={x}
      y={y}
      height={height}
      width={width}
      onClick={e => onClick(datum)}
      className="cursor-pointer"
    />
  )
}

export default function PubBarChart({
  data,
  barWidth = 5,
  barMargin = 1,
  yMax = 20,
  height = 100,
  xMargin = 20,
  r1,
  r2,
  onClick,
}) {
  const barW = barWidth + barMargin
  const width = data.length * barW + 2 * xMargin
  const scaleFactor = height / yMax

  return (
    <Chart height={height} width={width}>
      {data.map((datum, index) => {
        const h = datum.value * scaleFactor
        return (
          <Bar
            key={index}
            x={xMargin + index * barW}
            y={height - h}
            width={barWidth}
            height={h}
            datum={{ index, ...datum }}
            onClick={onClick}
            isColored={index >= r1 && index <= r2}
          />
        )
      })}
    </Chart>
  )
}
