import React, { useState } from 'react'

import './Analytics_filter.scss'

function Analytics_filter({period, handlePeriodChange}) {

  return (
    <div className="analyticsfilter">
        <section className="analyticsfilter__row">
            
            <select id="selectPeriod" className="analyticsfilter__row-period selector" value={period} onChange={handlePeriodChange}>
                <option value="default">Период</option>
                <option value="today">Сегодня</option>
                <option value="week">За неделю</option>
                <option value="month">За месяц</option>
                <option value="all">За всё время</option>
            </select>
        
        </section>
    </div>
  )
}

export {Analytics_filter}
