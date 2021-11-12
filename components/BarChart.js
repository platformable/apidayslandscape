import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

export default function BarChart() {

    const data = {
        labels: ['Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021'],
        datasets: [
          {
            label: '# of posts',
            data: [129, 19, 30, 15],
            backgroundColor: [
              '#0c4b6e',
              '#0c4b6e',
              '#0c4b6e',
              '#0c4b6e',
            ],
            borderRadius: 10,
          },
          
        ],

      };
      
      const options = {
        barThickness:30,
          responsive: true,
          plugins: {
           /*  title: {
              display: true,
              text: 'Grid Line Settings'
            } */
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
                drawTicks: false,
              },
              color:"#0c4b6e",
            },
            y: {
              grid: {
                display: true,
                drawBorder: false,
                drawOnChartArea: true,
                drawTicks: true,
              },
            }
   
        },
      };

    return (
 
            <Bar data={data} options={options} />

    )
}
