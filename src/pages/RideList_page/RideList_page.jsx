import React from 'react'
import { Menu } from '../../moduls/menu/Menu'

import { RideList } from '../../moduls/rideList/RideList'

import './RideList_page.scss'

function RideList_page({adaptive, setAdaptive}) {
  return (
    <div className="App">
        <div className="App__menu">
          <Menu className="App__menu-component"/>
        </div>
        <RideList adaptive={adaptive} setAdaptive={setAdaptive}/>
    </div>
  )
}

export {RideList_page}