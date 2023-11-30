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
import { faker } from '@faker-js/faker'

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
    
      let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    
      if (period === 'today') {
        labels = ['8pm', '10pm', '12pm', '14pm', '16pm', '18pm', '20pm'];
      } else if (period === 'week'){
        labels = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      } else if (period === 'month'){
        labels = ['01', '10', '15', '20', '25', '30'];
      } else if (period === 'all'){
        labels = ['January', 'February', 'March', 'April', 'May'];
      }
      
  
      let data = {
          labels,
          datasets: [
            {
              fill: true,
              data: ['900', '2320', '5250', '7000', '6000', '2100', '1300'],
              borderColor: 'rgb(255, 180, 84)',
              backgroundColor: 'rgba(255, 180, 84, 1.0)',
            },
          ],
        };
  
      if (company === 'default'){
        if (period === 'today') {
          data = {
            labels,
            datasets: [
              {
                fill: true,
                data: ['150', '250', '180', '980', '630', '180', '540'],
                borderColor: 'rgb(255, 180, 84)',
                backgroundColor: 'rgba(255, 180, 84, 1.0)',
              },
            ],
          };
        }
        if (period === 'week') {
          data = {
            labels,
            datasets: [
              {
                fill: true,
                data: ['550', '1600', '300', '2000', '1600', '2100', '500'],
                borderColor: 'rgb(255, 180, 84)',
                backgroundColor: 'rgba(255, 180, 84, 1.0)',
              },
            ],
          };
        }
        if (period === 'month') {
          data = {
            labels,
            datasets: [
              {
                fill: true,
                data: ['1210', '4050', '4200', '3400', '3100', '9999', '3100'],
                borderColor: 'rgb(255, 180, 84)',
                backgroundColor: 'rgba(255, 180, 84, 1.0)',
              },
            ],
          };
        }
      } else{
        if (period === 'today') {
          data = {
            labels,
            datasets: [
              {
                fill: true,
                data: companies[company - 1].totalExported[0].today,
                borderColor: 'rgb(255, 180, 84)',
                backgroundColor: 'rgba(255, 180, 84, 1.0)',
              },
            ],
          };
        }
        if (period === 'week') {
          data = {
            labels,
            datasets: [
              {
                fill: true,
                data: companies[company - 1].totalExported[0].week,
                borderColor: 'rgb(255, 180, 84)',
                backgroundColor: 'rgba(255, 180, 84, 1.0)',
              },
            ],
          };
        }
        if (period === 'month') {
          data = {
            labels,
            datasets: [
              {
                fill: true,
                data: companies[company - 1].totalExported[0].month,
                borderColor: 'rgb(255, 180, 84)',
                backgroundColor: 'rgba(255, 180, 84, 1.0)',
              },
            ],
          };
        }
        if (period === 'default') {
        data = {
          labels,
          datasets: [
            {
              fill: true,
              data: companies[company - 1].totalExported[0].month,
              borderColor: 'rgb(255, 180, 84)',
              backgroundColor: 'rgba(255, 180, 84, 1.0)',
            },
          ],
        };
      }
      }
    
  return (
    <div className="exportedcard">
        <section className="exportedcard__row">
            <p className="exportedcard__row-title">Вывезено (тонн):</p>
            {company === 'default' &&
              <>
                { period === 'today' &&
                  <p className="exportedcard__row-percents">{'8,64'}%</p>
                }
                { period === 'week' &&
                  <p className="exportedcard__row-percents">{'27,00'}%</p>
                }
                { period === 'month' &&
                  <p className="exportedcard__row-percents">{'68,99'}%</p>
                }
                { period === 'all' &&
                  <p className="exportedcard__row-percents">{'99,00'}%</p>
                }
                { period === 'default' &&
                  <p className="exportedcard__row-percents">{'99,00'}%</p>
                }
              </>
            }
            
            { company === '1' &&
              <p className="exportedcard__row-percents">{'8,64'}%</p>
            }
            { company === '2' &&
              <p className="exportedcard__row-percents">{'27,00'}%</p>
            }
            { company === '3' &&
              <p className="exportedcard__row-percents">{'68,99'}%</p>
            }
            { company === '4' &&
              <p className="exportedcard__row-percents">{'99,00'}%</p>
            }
            { company === '5' &&
              <p className="exportedcard__row-percents">{'99,00'}%</p>
            }
            
        </section>
            {company === 'default' &&
              <>
                { period === 'today' &&
                  <p className="exportedcard__count">{'41'}</p>
                }
                { period === 'week' &&
                  <p className="exportedcard__count">{'541'}</p>
                }
                { period === 'month' &&
                  <p className="exportedcard__count">{'1242'}</p>
                }
                { period === 'all' &&
                  <p className="exportedcard__count">{'14998'}</p>
                }
                { period === 'default' &&
                  <p className="exportedcard__count">{'14998'}</p>
                }
              </>
            }
                { company === '1' &&
                  <p className="exportedcard__count">{'321'}</p>
                }
                { company === '2' &&
                  <p className="exportedcard__count">{'3211'}</p>
                }
                { company === '3' &&
                  <p className="exportedcard__count">{'5231'}</p>
                }
                { company === '4' &&
                  <p className="exportedcard__count">{'14998'}</p>
                }
                { company === '5' &&
                  <p className="exportedcard__count">{'14998'}</p>
                }
        <p className="exportedcard__plan-title">
            План:
        </p>
        <p className="exportedcard__plan-count">
            {plan}
        </p>
        <div className="exportedcard__chart">
            <Line options={options} data={data} />
        </div>
    </div>
  )
}

export {Exported_card}
