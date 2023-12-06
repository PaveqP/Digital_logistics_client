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

    const labels = companies.map(lb => lb.number);

    const data = {
    labels,
    datasets: [
        {
        label: 'Dataset 1',
        data: companies.map((companie) => companie.weight),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
    };

  return (
    <div className="relationcard">
        <div className="relationcard__title">
            Соотношение вывезенного по перевозкам
        </div>
        <div className="relationcard__chart">
            <Bar options={options} data={data} />
        </div>
        <section className="relationcard__stats">
            { 
                companies.map((companie) => (
                    <Stat key={companie.id} color={'rgb(255, 99, 132)'} text={companie.number}/>
                ))
            }
        </section>
    </div>
  )
}

export {Relation_card}
