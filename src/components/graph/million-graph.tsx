import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

interface IProps {
  age: number
  data1: number[]
  data2: number[]
}

const MillionGraph = ({ age, data1 = [], data2 = [] }: IProps) => {
  const labels = []

  for (var i = 0; i < data1.length; ++i) {
    labels.push(age + i)
  }

  return (
    <Line
      data={{
        labels: labels,
        //Bring in data
        datasets: [
          {
            label: 'Balance After Inflation',
            data: data2,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(0, 0, 0, 0)',
            fill: true,
          },
          {
            label: 'Balance',
            data: data1,
            backgroundColor: 'rgba(100, 149, 237, 0.8)',
            borderColor: 'rgba(100, 149, 237, 0)',
            fill: true,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: false,
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (tooltipItem: any) => {
                return (
                  '$' +
                  Math.round(tooltipItem.parsed.y * 1000000).toLocaleString()
                )
              },
            },
          },
        },

        scales: {
          x: {
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

export default MillionGraph
