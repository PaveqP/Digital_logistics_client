import React, { useState } from 'react'
import { Cabinet } from '../../components/cabinet/Cabinet'
import { Analytics_title } from '../../components/analytics_title/Analytics_title'
import { Analytics_cards } from '../../components/analytics_cards/Analytics_cards'

import './Analytics.scss'
import { useSelector } from 'react-redux'

function Analytics({adaptive, setAdaptive}) {

    const getPeriodState = () => {
        const periodValue = "default";
        return periodValue;
    };
    const handlePeriodChange = (e) => {
        setPeriod(e.target.value);
    };


  const [period, setPeriod] = useState(getPeriodState)

  const routes = useSelector(state => state.route.routes)

  console.log(period)
  
  return (
    <div className='analytics'>
        <Cabinet/>
        <Analytics_title 
          adaptive={adaptive} 
          setAdaptive={setAdaptive} 
          companies={routes} 
          period={period} 
          handlePeriodChange={handlePeriodChange}
/>
        <Analytics_cards 
          companies={routes}
          period={period}
        />
    </div>
  )
}

export {Analytics}
