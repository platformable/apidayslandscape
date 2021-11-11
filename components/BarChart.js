import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

export default function BarChart() {

    const data = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: '# of posts',
            data: [12, 19, 3, 5],
            backgroundColor: [
              '#0c4b6e',
              '#0c4b6e',
              '#0c4b6e',
              '#0c4b6e',
            ],
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines : {
                color: "rgba(0, 0, 0, 0)",
                lineWidth: 0,
                display : false
            }
            }
            ,
          ],
        },
        plugins: {
            datalabels: {
               display: true,
               color: 'white'
            }
         },
      };

    return (
 
            <Bar data={data} options={options} />

    )
}
