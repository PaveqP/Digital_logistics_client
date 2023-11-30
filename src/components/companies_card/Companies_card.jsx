import React from 'react'

import './Companies_card.scss'

function Companies_card({companies, career, company, period}) {
  return (
    <div className="companiescard">
        <div className="companiescard__row">
            <div className="companiescard__row-company">
                <p className="companiescard__row-company-title">Подрядчик</p>
                {
                    companies.map((company) => (
                        <p className="companiescard__row-company-name" key={company.id} style={{color: company.color}}>{company.name}</p>
                    ))
                }  
            </div>
            <div className="companiescard__row-transits">
                <p className="companiescard__row-transits-title">Количество машинорейсов</p>
                {period === 'today' &&
                    companies.map((company) => (
                        <p className="companiescard__row-transits-name" key={company.id}>{company.today}</p>
                    ))
                }  
                {period === 'week' &&
                    companies.map((company) => (
                        <p className="companiescard__row-transits-name" key={company.id}>{company.week}</p>
                    ))
                }  
                {period === 'month' &&
                    companies.map((company) => (
                        <p className="companiescard__row-transits-name" key={company.id}>{company.month}</p>
                    ))
                }  
                {(period === 'all' || period === 'default') &&
                    companies.map((company) => (
                        <p className="companiescard__row-transits-name" key={company.id}>{company.transits}</p>
                    ))
                }  
            </div>
            <div className="companiescard__row-exported">
                <p className="companiescard__row-exported-title">Вывезено (тонн)</p>
                {period === 'today' &&
                    companies.map((company) => (
                        <p className="companiescard__row-exported-name" key={company.id}>{company.todayExported}</p>
                    ))
                }  
                {period === 'week' &&
                    companies.map((company) => (
                        <p className="companiescard__row-exported-name" key={company.id}>{company.weekExported}</p>
                    ))
                }  
                {period === 'month' &&
                    companies.map((company) => (
                        <p className="companiescard__row-exported-name" key={company.id}>{company.monthExported}</p>
                    ))
                }  
                {(period === 'all' || period === 'default') &&
                    companies.map((company) => (
                        <p className="companiescard__row-exported-name" key={company.id}>{company.exported}</p>
                    ))
                }  
            </div>
            <div className="companiescard__row-day">
                <p className="companiescard__row-day-title">Среднее кол-во рейсов</p>
                {period === 'today' &&
                    companies.map((company) => (
                        <p className="companiescard__row-day-name" key={company.id}>{company.todayDay}</p>
                    ))
                }  
                {period === 'week' &&
                    companies.map((company) => (
                        <p className="companiescard__row-day-name" key={company.id}>{company.weekDay}</p>
                    ))
                }  
                {period === 'month' &&
                    companies.map((company) => (
                        <p className="companiescard__row-day-name" key={company.id}>{company.monthDay}</p>
                    ))
                }  
                {(period === 'all' || period === 'default') &&
                    companies.map((company) => (
                        <p className="companiescard__row-day-name" key={company.id}>{company.day}</p>
                    ))
                }  
            </div>
        </div>
    </div>
  )
}

export {Companies_card}
