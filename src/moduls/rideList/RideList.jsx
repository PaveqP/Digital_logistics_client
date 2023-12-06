import React, { useEffect, useState } from 'react'
import { Cabinet } from '../../components/cabinet/Cabinet'
import { RideList_title } from '../../components/rideList_title/RideList_title'
import { RideList_sctruct } from '../../components/rideList_structure/RideList_sctruct'
import { RideList_list } from '../../components/rideList_list/RideList_list'
import { getRoutes } from '../../responses/RoutesResponses'
import axios from 'axios'
import { store } from '../../store'
import { Loader } from '../../components/loader/Loader'

import './RideList.scss'
import { useSelector } from 'react-redux'


function RideList({adaptive, setAdaptive}) {

  const [rideData, setRideData] = useState(['none'])
  const [loading, setLoading] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [timeInterval, setTimeInterval] = useState('all')

  const [showConfig, setShowConfig] = useState({
      id: true,
      number: true,
      enter: true,
      exit: true,
      duration: true,
      weight: true,
      volume: false,
      road: false,
      photo: true
  })

const routes = useSelector(state => state.route.routes)

  useEffect(() => {
    const data = store.getState().route.routes
    console.log(data)
    setRideData(data)
 }, [routes])
 

  return (
    <div className="ridelist">
      <Cabinet/>
      <RideList_title adaptive={adaptive} setAdaptive={setAdaptive} timeInterval={timeInterval} setTimeInterval={setTimeInterval} showFilter={showFilter} setShowFilter={setShowFilter}/>
      <RideList_sctruct showConfig={showConfig} setShowConfig={setShowConfig} showFilter={showFilter} setShowFilter={setShowFilter}/>
      {
        rideData.length > 0 ? 
        <RideList_list timeInterval={timeInterval} setTimeInterval={setTimeInterval} rideData={rideData} showConfig={showConfig} loading={loading} setAdaptive={setAdaptive}/> 
        : 
        <Loader/>
      }
      
    </div>
  )
}

export {RideList}