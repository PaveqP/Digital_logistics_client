import React from 'react'

import './TimeFilter.scss'

function TimeFilter({timeInterval, setTimeInterval}) {
  return (
    <div className="timefilter">
        <section className="timefilter__row">
            <button className="timefilter__row-button" onClick={() => setTimeInterval(timeInterval => 'today')}> За сегодня </button>
            <button className="timefilter__row-button" onClick={() => setTimeInterval('week')}> За неделю </button>
            <button className="timefilter__row-button" onClick={() => setTimeInterval('month')}> За месяц </button>
            <button className="timefilter__row-button" onClick={() => setTimeInterval('all')}> Все </button>
        </section>
    </div>
  )
}

export {TimeFilter}
