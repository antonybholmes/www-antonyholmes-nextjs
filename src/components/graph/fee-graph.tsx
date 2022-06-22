import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

interface IProps {
  data1: number[]
  data2: number[]
}

const FeeGraph = ({ data1 = [], data2 = [] }: IProps) => {
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
            label: 'With Fees',
            data: data2,
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderColor: 'rgba(0,0,0,0)',
            fill: true,
          },
          {
            label: 'Without Fees',
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

export default FeeGraph
