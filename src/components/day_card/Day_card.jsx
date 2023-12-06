import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import './Day_card.scss'

function Day_card({count, companies, period, company}) {

  ChartJS.register(ArcElement, Tooltip, Legend);

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

  let data = {
    labels: companies.map(elem => elem.number),
    datasets: [
      {
        label: '# of Votes',
        data: companies.map(elem => elem.volume),
        backgroundColor: [
          'rgba(255, 180, 84, 1.0)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(543, 32, 235, 0.2)',
          'rgba(23, 43, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 180, 84, 1.0)',
          'rgba(54, 162, 235, 1)',
          'rgba(543, 32, 235, 0.2)',
          'rgba(23, 43, 235, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  };
    
  return (
    <div className="daycard">
        <p className="daycard__row-title">
            Соотношение вывезенных объёмов по перевозкам
        </p>
        <p className="daycard__count">
            {company === 'default' &&
              <>
                { period === 'today' &&
                  <p className="daycard__count">{'1'}%</p>
                }
                { period === 'week' &&
                  <p className="daycard__count">{'2'}%</p>
                }
                { period === 'month' &&
                  <p className="daycard__count">{'3'}%</p>
                }
                { period === 'all' &&
                  <p className="daycard__count">{'5'}%</p>
                }
                { period === 'default' &&
                  <p className="daycard__count">{'5'}%</p>
                }
              </>
            }
            
            { company === '1' &&
              <p className="daycard__count">{'0,2'}%</p>
            }
            { company === '2' &&
              <p className="daycard__count">{'1,1'}%</p>
            }
            { company === '3' &&
              <p className="daycard__count">{'1,4'}%</p>
            }
            { company === '4' &&
              <p className="daycard__count">{'0,8'}%</p>
            }
            { company === '5' &&
              <p className="daycard__count">{'2,2'}%</p>
            }
        </p>
        <div className="daycard__chart">
          <Pie data={data} options={options}/>
        </div>
    </div>
  )
}

export {Day_card}
