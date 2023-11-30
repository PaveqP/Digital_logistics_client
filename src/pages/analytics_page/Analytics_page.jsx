import React from 'react'
import { Analytics } from '../../moduls/analytics/Analytics'
import { Menu } from '../../moduls/menu/Menu'

import './Analytics_page.scss'

function Analytics_page({adaptive, setAdaptive}) {
  return (
    <div className="App">
        <div className="App__menu">
          <Menu className="App__menu-component"/>
        </div>
        <Analytics adaptive={adaptive} setAdaptive={setAdaptive}/>
    </div>
  )
}

export {Analytics_page}
