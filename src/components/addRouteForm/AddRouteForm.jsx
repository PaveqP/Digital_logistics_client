import './AddRouteForm.scss'
import { addRoute } from '../../responses/RoutesResponses'
import { getRoutes } from '../../responses/RoutesResponses'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function AddRouteForm() {

  const [number, setNumber] = useState('')
  const [exitDate, setExitDate] = useState('')
  const [enterDate, setEnterDate] = useState('')
  const [exitCity, setExitCity] = useState('')
  const [weight, setWeight] = useState('')
  const [volume, setVolume] = useState('')
  const [duration, setDuration] = useState('')
  const [enterCity, setEnterCity] = useState('')

  const [open, setOpen] = useState(false)

  const token = useSelector(state => state.user.token)

  const sendRouteData = () => {
    addRoute(number, exitDate, enterDate, exitCity, enterCity, weight, volume, duration, token).then(setOpen(!open))
    //getRoutes(token)
  }

  return (
    <div className='addroute'>
        <button className='addroute__button' onClick={() => setOpen(!open)}>Добавить поездку</button>
        {open &&
        <section className='addroute__form'>
            <img className='addroute__form-close' src={require('../../ui/images/burger-open.png')} alt="" onClick={() => setOpen(!open)}/>
            <div className='addroute__form-form'>
                
                <h2 className='addroute__form-form-title'>Укажите данные о поездке</h2>
                <div className='addroute__form-form-separator'></div>

                <p>Номер транспортного средства</p>
                <input type="text" className='addroute__form-form-input' value={number} onChange={e => setNumber(e.target.value)}/>

                <p>Дата выезда</p>
                <input type="text" className='addroute__form-form-input' placeholder='20.05.2023' value={exitDate} onChange={e => setExitDate(e.target.value)}/>

                <p>Дата прибытия</p>
                <input type="text" className='addroute__form-form-input' placeholder='28.05.2023' value={enterDate} onChange={e => setEnterDate(e.target.value)}/>

                <p>Длительность поездки, ч</p>
                <input type="text" className='addroute__form-form-input' placeholder='10' value={duration} onChange={e => setDuration(e.target.value)}/>

                <p>Вес груза, кг</p>
                <input type="text" className='addroute__form-form-input' value={weight} onChange={e => setWeight(e.target.value)}/>

                <p>Объём груза, м3</p>
                <input type="text" className='addroute__form-form-input' value={volume} onChange={e => setVolume(e.target.value)}/>

                <p>Город отправления</p>
                <input type="text" className='addroute__form-form-input' value={exitCity} onChange={e => setExitCity(e.target.value)}/>

                <p>Город назначения</p>
                <input type="text" className='addroute__form-form-input' value={enterCity} onChange={e => setEnterCity(e.target.value)}/>

                <button className='addroute__form-form-send' onClick={() => sendRouteData()}>Добавить поездку</button>
            </div>
        </section>
        }
    </div>
  )
}

export {AddRouteForm}