import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

import './Exported_card.scss'

function Exported_card({percents, count, plan, period, company, companies}) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );

    const options = {
        responsive: true,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                },
            },
            y: {
                display: false,
                grid: {
                    display: false
                },
            }
        },
        plugins: {
          legend: {
            display: false
          },

        },
      };
    
      let labels = companies.map(el => el.number)

      let totalExported = companies.reduce(function (sum, elem) {
        return sum + Number(elem.weight)
      }, 0)
      
  
      let data = {
          labels,
          datasets: [
            {
              fill: true,
              data: companies.map((companie) => companie.weight),
              borderColor: 'rgb(255, 180, 84)',
              backgroundColor: 'rgba(255, 180, 84, 1.0)',
            },
          ],
        };
  
      
    
  return (
    <div className="exportedcard">
        <section className="exportedcard__row">
            <p className="exportedcard__row-title">Вывезено (кг):</p>
        </section>
        <p className="exportedcard__count">{totalExported}</p>
        <div className="exportedcard__chart">
            <Line options={options} data={data} />
        </div>
    </div>
  )
}

export {Exported_card}
