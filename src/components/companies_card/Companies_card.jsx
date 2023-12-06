import React from 'react'

import './Companies_card.scss'
import { useSelector } from 'react-redux'

function Companies_card({companies, career, company, period}) {


  return (
    <div className="companiescard">
        <div className="companiescard__row">
            <div className="companiescard__row-company">
                <p className="companiescard__row-company-title">Перевозка</p>
                {
                    companies.map((company) => (
                        <p className="companiescard__row-company-name" key={company.id} style={{color: company.color}}>{company.id}: {company.number}</p>
                    ))
                }  
            </div>
            <div className="companiescard__row-transits">
                <p className="companiescard__row-transits-title">Вывезено (м3)</p>
                {
                    companies.map((company) => (
                        <p className="companiescard__row-transits-name" key={company.id}>{company.volume}</p>
                    ))
                }  
            </div>
            <div className="companiescard__row-exported">
                <p className="companiescard__row-exported-title">Вывезено (кг)</p>
                {
                    companies.map((company) => (
                        <p className="companiescard__row-exported-name" key={company.id}>{company.weight}</p>
                    ))
                }  
                 
            </div>
            <div className="companiescard__row-day">
                <p className="companiescard__row-day-title">Длительность</p>
                {
                    companies.map((company) => (
                        <p className="companiescard__row-day-name" key={company.id}>{company.duration}</p>
                    ))
                }  
            
            </div>
        </div>
    </div>
  )
}

export {Companies_card}
