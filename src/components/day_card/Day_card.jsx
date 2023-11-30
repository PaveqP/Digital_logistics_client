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
    labels: ['today', 'yesterday'],
    datasets: [
      {
        label: '# of Votes',
        data: [85, 15],
        backgroundColor: [
          'rgba(255, 180, 84, 1.0)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 180, 84, 1.0)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  if (company === 'default'){
    if (period === 'today') {
      data = {
        labels: ['today', 'yesterday'],
        datasets: [
          {
            label: '# of Votes',
            data: [35, 65],
            backgroundColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
    if (period === 'week') {
      data = {
        labels: ['today', 'yesterday'],
        datasets: [
          {
            label: '# of Votes',
            data: [88, 12],
            backgroundColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
    if (period === 'month') {
      data = {
        labels: ['today', 'yesterday'],
        datasets: [
          {
            label: '# of Votes',
            data: [92, 8],
            backgroundColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
  } else{
    if (period === 'today') {
      data = {
        labels: ['today', 'yesterday'],
        datasets: [
          {
            label: '# of Votes',
            data: companies[company - 1].totalDay,
            backgroundColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
    if (period === 'week') {
      data = {
        labels: ['today', 'yesterday'],
        datasets: [
          {
            label: '# of Votes',
            data: companies[company - 1].totalDay,
            backgroundColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
    if (period === 'month') {
      data = {
        labels: ['today', 'yesterday'],
        datasets: [
          {
            label: '# of Votes',
            data: companies[company - 1].totalDay,
            backgroundColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
    if (period === 'default') {
      data = {
        labels: ['today', 'yesterday'],
        datasets: [
          {
            label: '# of Votes',
            data: companies[company - 1].totalDay,
            backgroundColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 180, 84, 1.0)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
  }
    
  return (
    <div className="daycard">
        <p className="daycard__row-title">
            Среднее количество рейсов машины в сутки
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
        <a className="daycard__plan-title">
            по сравнению 
            <p>со вчерашним днем</p>
        </a>
        <div className="daycard__chart">
          <Pie data={data} options={options}/>
        </div>
    </div>
  )
}

export {Day_card}
