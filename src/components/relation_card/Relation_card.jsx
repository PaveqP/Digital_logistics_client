import React from 'react'
import { Stat } from './Stat'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

import './Relation_card.scss'

function Relation_card({companies}) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        indexAxis: 'y',
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
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'right',
          },
          title: {
            display: false,
            text: 'Chart.js Horizontal Bar Chart',
          },
        },
    };

    const labels = [companies[0].text, companies[1].text, companies[2].text, companies[3].text, companies[4].text];

    const data = {
    labels,
    datasets: [
        {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
    };

  return (
    <div className="relationcard">
        <div className="relationcard__title">
            Соотношение вывезенного по подрядчикам
        </div>
        <div className="relationcard__chart">
            <Bar options={options} data={data} />
        </div>
        <section className="relationcard__stats">
            { 
                companies.map((companie) => (
                    <Stat key={companie.id} color={companie.color} text={companie.text}/>
                ))
            }
        </section>
    </div>
  )
}

export {Relation_card}
