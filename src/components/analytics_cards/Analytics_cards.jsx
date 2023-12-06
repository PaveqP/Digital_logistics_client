import React, { useEffect, useState } from 'react'
import { Routes_card } from '../routes_card/Routes_card'
import { Exported_card } from '../exported_card/Exported_card'
import { Day_card } from '../day_card/Day_card'
import { Relation_card } from '../relation_card/Relation_card'
import { Companies_card } from '../companies_card/Companies_card'

import './Analytics_cards.scss'

function Analytics_cards({companies, career, period, company}) {

  let today = new Date()

  const [data, setData] = useState([]);

  console.log(data, 'after today')

  let Today = new Date()
	let day = String(Today.getDate())
	let month = String(Today.getMonth() + 1).padStart(2, '0')
	let year = String(Today.getFullYear()).slice(0,4)

	if (day.length === 1){
		day = '0' + day
	}
  
  useEffect(() => {
    switch(period) {
      case 'today':  
        setData(companies)
        let filteredData = companies.filter((elem) => (elem.exit_date === `${day}.${month}.${year}`))
        setData(filteredData)
        console.log(`${day}.${month}.${year}`)
        console.log('done')

        break
      
      case 'week':  
        setData([])
        console.log(Number(`01`))
        let weekData = companies.filter((elem) => 
          (
            ((Number(`${day}`) - Number(elem.exit_date.slice(0,2)) <= 7 && 
            Number(`${day}`) - Number(elem.exit_date.slice(0,2)) >= 0) && 
            (elem.exit_date.slice(3,10) === `${month}.${year}`))
          || 
            (
              (((30 + Number(`${day}`)) - Number(elem.exit_date.slice(0,2))) <= 7) && 
              ((elem.exit_date.slice(3,10) === `${'0' + String(Number(month) - 1)}.${year}`) || 
              (elem.exit_date.slice(3,10) === `${String(Number(month) - 1)}.${year}`))
            )
          )
        )
        weekData.length > 0 ? setData(weekData) : console.log(weekData)
        console.log('done')
        console.log(companies, 'after done')
        break
  
      case 'month':  
        setData(companies)
        let monthData = companies.filter((elem) => 
        ( 
          (Number(`${day}`) - Number(elem.exit_date.slice(0,2)) >= 0 && elem.exit_date.slice(3,10) === `${month}.${year}`)
  
          || 
          (
            (((30 + Number(`${day}`)) - Number(elem.exit_date.slice(0,2))) <= 30) && 
            ((elem.exit_date.slice(3,10) === `${'0' + String(Number(month) - 1)}.${year}`) || 
            (elem.exit_date.slice(3,10) === `${String(Number(month) - 1)}.${year}`))
          )
        ))
        setData(monthData)
        console.log('done')
        console.log(companies, 'after done')
        break
      
      default:
        setData(companies)
    }
  }, [period, companies])
  

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
          <Routes_card  companies={data}/>
          <Exported_card  companies={data} />
          <Day_card count={'2,2'} companies={data}/>
          {
            <>
              <Relation_card companies={data}/>
              <Companies_card companies={data}/>
            </>
          }
          
        </div>

    </div>
  )
}

export {Analytics_cards}
