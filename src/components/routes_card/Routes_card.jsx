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
            data: ['1000', '2000', '5550', '7000', '6000', '3000', '2200'],
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
              data: ['100', '200', '200', '700', '600', '30', '500'],
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
              data: ['500', '1200', '900', '2400', '2800', '2500', '800'],
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
              data: ['1900', '2900', '4200', '3400', '6000', '980', '3100'],
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
              data: companies[company - 1].routes[0].today,
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
              data: companies[company - 1].routes[0].week,
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
              data: companies[company - 1].routes[0].month,
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
              data: companies[company - 1].routes[0].month,
              borderColor: 'rgb(255, 180, 84)',
              backgroundColor: 'rgba(255, 180, 84, 1.0)',
            },
          ],
        };
      }
    }
    
    
  return (
    <div className="routescard">
        <section className="routescard__row">
            <p className="routescard__row-title">Сделано рейсов:</p>

            {company === 'default' &&
              <>
                { period === 'today' &&
                  <p className="routescard__row-percents">{'13,44'}%</p>
                }
                { period === 'week' &&
                  <p className="routescard__row-percents">{'33,21'}%</p>
                }
                { period === 'month' &&
                  <p className="routescard__row-percents">{'82,95'}%</p>
                }
                { period === 'all' &&
                  <p className="routescard__row-percents">{'97,50'}%</p>
                }
                { period === 'default' &&
                  <p className="routescard__row-percents">{'97,50'}%</p>
                }
              </>
            }
            
            { company === '1' &&
              <p className="routescard__row-percents">{'13,44'}%</p>
            }
            { company === '2' &&
              <p className="routescard__row-percents">{'43,21'}%</p>
            }
            { company === '3' &&
              <p className="routescard__row-percents">{'87,95'}%</p>
            }
            { company === '4' &&
              <p className="routescard__row-percents">{'87,50'}%</p>
            }
            { company === '5' &&
              <p className="routescard__row-percents">{'94,87'}%</p>
            }
            
        </section>
            {company === 'default' &&
              <>
                { period === 'today' &&
                  <p className="routescard__count">{'30'}</p>
                }
                { period === 'week' &&
                  <p className="routescard__count">{'2000'}</p>
                }
                { period === 'month' &&
                  <p className="routescard__count">{'6000'}</p>
                }
                { period === 'all' &&
                  <p className="routescard__count">{'14987'}</p>
                }
                { period === 'default' &&
                  <p className="routescard__count">{'14987'}</p>
                }
              </>
            }
                { company === '1' &&
                  <p className="routescard__count">{'42'}</p>
                }
                { company === '2' &&
                  <p className="routescard__count">{'3113'}</p>
                }
                { company === '3' &&
                  <p className="routescard__count">{'4212'}</p>
                }
                { company === '4' &&
                  <p className="routescard__count">{'8211'}</p>
                }
                { company === '5' &&
                  <p className="routescard__count">{'11214'}</p>
                }
        <p className="routescard__plan-title">
            План:
        </p>
        <p className="routescard__plan-count">
            {plan}
        </p>
        <div className="routescard__chart">
            <Line options={options} data={data} />
        </div>
    </div>
  )
}

export {Routes_card}
