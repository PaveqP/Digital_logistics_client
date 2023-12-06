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

import './Routes_card.scss'

function Routes_card({percents, count, plan, companies, period, company}) {

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

    const labels = companies.map(lb => lb.number);

    const durationSum = companies.reduce(function (sum, elem) {
      return sum + Number(elem.duration)
    }, 0)
    
    const data = {
        labels,
        datasets: [
          {
            fill: true,
            data: companies.map((companie) => companie.duration),
            borderColor: 'rgb(255, 180, 84)',
            backgroundColor: 'rgba(255, 180, 84, 1.0)',
          },
        ],
      };
    
    
  return (
    <div className="routescard">
        <section className="routescard__row">
            <p className="routescard__row-title">Длительность перевозок:</p>
        </section>
        <p className='routescard__count'>{durationSum}</p>
        <div className="routescard__chart">
            <Line options={options} data={data} />
        </div>
    </div>
  )
}

export {Routes_card}
