import React from 'react'
import { Routes_card } from '../routes_card/Routes_card'
import { Exported_card } from '../exported_card/Exported_card'
import { Day_card } from '../day_card/Day_card'
import { Relation_card } from '../relation_card/Relation_card'
import { Companies_card } from '../companies_card/Companies_card'

import './Analytics_cards.scss'

function Analytics_cards({companies, career, period, company}) {

  let today = new Date()

  return (
    <div className="analyticscards">
      {period === 'today' &&
        <p className="analyticscards_title">Статистика за сегодня ({String(today.getDate()).padStart(2, '0')}.{String(today.getMonth() + 1).padStart(2, '0') }.{today.getFullYear()})</p>
      }
      {period === 'week' &&
        <p className="analyticscards_title">Статистика за неделю ({String(today.getDate()).padStart(2, '0')}.{String(today.getMonth() + 1).padStart(2, '0') }.{today.getFullYear()})</p>
      }
      {period === 'month' &&
        <p className="analyticscards_title">Статистика за месяц ({String(today.getDate()).padStart(2, '0')}.{String(today.getMonth() + 1).padStart(2, '0') }.{today.getFullYear()})</p>
      }
      {period === 'all' &&
        <p className="analyticscards_title">Статистика за всё время ({String(today.getDate()).padStart(2, '0')}.{String(today.getMonth() + 1).padStart(2, '0') }.{today.getFullYear()})</p>
      }
      {period === 'default' &&
        <p className="analyticscards_title">Статистика за всё время ({String(today.getDate()).padStart(2, '0')}.{String(today.getMonth() + 1).padStart(2, '0') }.{today.getFullYear()})</p>
      }
        

        <div className="analyticscards__row">
          <Routes_card percents={'72,30%'} count={'10 845'} plan={'15 000'} companies={companies} period={period} company={company}/>
          <Exported_card percents={'64,12%'} count={'385 000'} plan={'600 000'} companies={companies} period={period} company={company}/>
          <Day_card count={'2,2'} companies={companies} period={period} company={company}/>
          { company === 'default' &&
            <>
              <Relation_card companies={companies}/>
              <Companies_card companies={companies} period={period} company={company} career={career}/>
            </>
          }
          
        </div>

    </div>
  )
}

export {Analytics_cards}
