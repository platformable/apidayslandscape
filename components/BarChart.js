import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

export default function BarChart({q1,q2,q3,q4}) {



    const data = {
        labels: ['Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021'],
        datasets: [
          {
            label: '# of posts',
            data: [parseInt(q1) || 0, parseInt(q2) || 0, parseInt(q3) || 0, parseInt(q4) || 0],
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
              suggestedMin: 0,
              suggestedMax: 50

            }
   
        },
      };

    return (
 
            <Bar data={data} options={options} />

    )
}
