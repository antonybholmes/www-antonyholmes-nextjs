import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

interface IProps {
  data1: number[]
}

const RetirementGraph = ({ data1 }: IProps) => {
  const labels = []

  for (var i = 0; i < data1.length; ++i) {
    labels.push(i + 1)
  }

  return (
    <Line
      data={{
        labels: labels,
        //Bring in data
        datasets: [
          {
            label: 'Retirement',
            data: data1,
            backgroundColor: 'rgba(100, 149, 237, 0.8)',
            borderColor: 'rgba(100, 149, 237, 0)',
            fill: true,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Years',
              font: {
                weight: 'bold',
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Dollars (millions)',
              font: {
                weight: 'bold',
              },
            },
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  )
}

RetirementGraph.defaultProps = {
  data1: [],
}

export default RetirementGraph
