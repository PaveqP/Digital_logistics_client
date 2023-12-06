import React, { useEffect, useState } from 'react'
import './Edits.scss'
import { useSelector } from 'react-redux'
import { editRoute } from '../../responses/RoutesResponses'

function Edit({id}) {

	const routes = useSelector(state => state.route.routes)
	const token = useSelector(state => state.user.token)

	const [open, setOpen] = useState(false)
	
	let currentData = routes.find(element => element.id === id)

	console.log(currentData)

	const [number, setNumber] = useState(currentData && currentData.number)
	const [exitDate, setExitDate] = useState(currentData && currentData.exit_date)
	const [enterDate, setEnterDate] = useState(currentData && currentData.enter_date)
	const [exitCity, setExitCity] = useState(currentData && currentData.exit_city)
	const [weight, setWeight] = useState(currentData && currentData.weight)
	const [volume, setVolume] = useState(currentData && currentData.volume)
	const [duration, setDuration] = useState(currentData && currentData.duration)
	const [enterCity, setEnterCity] = useState(currentData && currentData.enter_city)

	const sendEditResponse = () => {
		let needEdit = window.confirm(`Применить изменения маршрута ${id}?`)
		needEdit && editRoute(number, exitDate, enterDate, exitCity, enterCity, weight, volume, duration, id, token).then(setOpen(!open))
	}

  return (
	<>
    <div className='edit' onClick={() => setOpen(!open)}>
        <img className='edit__image' src={require('../images/edit.png')} />
    </div>
	{ open &&
		<div className="edit__form">
		<img className='addroute__form-close' src={require('../../ui/images/burger-open.png')} alt="" onClick={() => setOpen(!open)}/>
          	<div className="form__row">
			  <h2 className='row__form-title'>Измените данные о поездке {id}</h2>
                <div className='row__form-separator'></div>

                <p>Номер транспортного средства</p>
                <input type="text" className='row__form-input' value={number} onChange={e => setNumber(e.target.value)}/>

                <p>Дата выезда</p>
                <input type="text" className='row__form-input' placeholder='20.05.2023' value={exitDate} onChange={e => setExitDate(e.target.value)}/>

                <p>Дата прибытия</p>
                <input type="text" className='row__form-input' placeholder='28.05.2023' value={enterDate} onChange={e => setEnterDate(e.target.value)}/>

                <p>Длительность поездки, ч</p>
                <input type="text" className='row__form-input' placeholder='10' value={duration} onChange={e => setDuration(e.target.value)}/>

                <p>Вес груза, кг</p>
                <input type="text" className='row__form-input' value={weight} onChange={e => setWeight(e.target.value)}/>

                <p>Объём груза, м3</p>
                <input type="text" className='row__form-input' value={volume} onChange={e => setVolume(e.target.value)}/>

                <p>Город отправления</p>
                <input type="text" className='row__form-input' value={exitCity} onChange={e => setExitCity(e.target.value)}/>

                <p>Город назначения</p>
                <input type="text" className='row__form-input' value={enterCity} onChange={e => setEnterCity(e.target.value)}/>

                <button className='row__form-send' onClick={() => sendEditResponse()}>Применить изменения</button>
          	</div>
        </div>
		}
	</>
  )
}

export {Edit}