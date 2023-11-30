import React, { useState } from 'react'

import './Analytics_filter.scss'

function Analytics_filter({companies, career, period, company, handleCareerChange, handlePeriodChange, handleCompanyChange}) {

    

  return (
    <div className="analyticsfilter">
        <section className="analyticsfilter__row">
            
            <select id="selectPit" className="analyticsfilter__row-pit selector" value={career} onChange={handleCareerChange}>
                <option value="default">Карьер</option>
                <option value="first">1</option>

            </select>
            <select id="selectPeriod" className="analyticsfilter__row-period selector" value={period} onChange={handlePeriodChange}>
                <option value="default">Период</option>
                <option value="today">Сегодня</option>
                <option value="week">За неделю</option>
                <option value="month">За месяц</option>
                <option value="all">За всё время</option>
            </select>
            <select id="selectCompany" className="analyticsfilter__row-company selector" value={company} onChange={handleCompanyChange}>
                <option value="default">Подрядчик</option>
                {
                    companies.map((company => (
                        <option value={company.id}>{company.name}</option>
                    )))
                }

            </select>
        </section>
    </div>
  )
}

export {Analytics_filter}
