import React, { useState } from 'react'
import { Edit } from '../../ui/edits/Edit'
import { Delete } from '../../ui/edits/Delete'

import './RideList_element.scss'

function RideList_element(props) {

    const {
            id, 
            number, 
            enter, 
            enter_time, 
            exit, 
            exit_time, 
            duration, 
            weight, 
            volume, 
            road, 
            photo, 
            loading,
            showConfig,
			volume_count,
			exit_city,
			enter_city
        } = props

    const [popup1, setPopup1] = useState(false)
    const [popup2, setPopup2] = useState(false)

    const [showVolume, setShowVolume] = useState(false)
    const [showRoad, setShowRoad] = useState(false)

    const [updateRoad, setUpdateRoad] = useState(false)

    const getPhotos = (photo) => {
        if (photo)
        {
            const links = photo.split(',')
            return links
        }
        else
            return null
    }

    const getRoutes = (road) => {
        if (road)
        {
            const roads = road.split(',')
            return roads
        }
        else
            return null
    }

    if (loading){
        return <h2>loading....</h2>
    }

  return (
		<div className={`ridelistelement`}>
			<section className='ridelistelement_sctucture'>
				{showConfig.id && (
					<div className='ridelistelement_sctucture-id data'>{id}</div>
				)}
				{showConfig.number && (
					<div className='ridelistelement_sctucture-number data'>{number}</div>
				)}
				{showConfig.enter && (
					<div className='ridelistelement_sctucture-entry data'>
						<p className='ridelistelement_sctucture-entry-main'> {enter} </p>
						<p className='ridelistelement_sctucture-entry-side'>
							{' '}
							{enter_time}{' '}
						</p>
					</div>
				)}
				{showConfig.exit && (
					<div className='ridelistelement_sctucture-exit data'>
						<p className='ridelistelement_sctucture-entry-main'> {exit}</p>
						<p className='ridelistelement_sctucture-entry-side'> {exit_time}</p>
					</div>
				)}
				{showConfig.duration && (
					<div className='ridelistelement_sctucture-duration data'>
						{duration}
					</div>
				)}
				{showConfig.weight && (
					<div className='ridelistelement_sctucture-weight data'>{weight}</div>
				)}
				{showConfig.volume && (
					<>
						<div className='ridelistelement_sctucture-volume data'>
							<div className='ridelistelement_sctucture-volume-count'>{volume_count}</div>
						</div>
						{showVolume && (
							<div className='ridelistelement_sctucture-volume-preview'>
								<img 
									className='ridelistelement_sctucture-volume-preview-close'
									src={require('../../ui/images/burger-open.png')}
									alt="close" 
									onClick={() => setShowVolume(false)}
								/>
								<img
									src={volume}
									alt='скрыть'
									onClick={() => setShowVolume(false)}
								/>
							</div>
						)}
					</>
				)}
				{showConfig.road && (
					<>
						<div className='ridelistelement_sctucture-road data'>
							<button className='ridelistelement_sctucture-road-button'>
								{exit_city}
							</button>
							<button className='ridelistelement_sctucture-road-button'>
								{enter_city}
							</button>
						</div>

					</>
				)}
					<div className='ridelistelement_sctucture-photos data'>
						<Edit id={id}/>
						<Delete id={id}/>
					</div>
			</section>

			<section className='ridelistelement__adaptive-sctucture'>
				<div className='idelistelement__adaptive-sctucture-row'>
					{showConfig.id && (
						<div className='idelistelement__adaptive-sctucture-row-id'>
							<p className='idelistelement__adaptive-sctucture-row-id-title adaptiveTitle'>
								№
							</p>
							<p className='idelistelement__adaptive-sctucture-row-id-info adaptiveData'>
								{id}
							</p>
						</div>
					)}
					{showConfig.number && (
						<div className='idelistelement__adaptive-sctucture-row-number'>
							<p className='idelistelement__adaptive-sctucture-row-number-title adaptiveTitle'>
								Номер ТС
							</p>
							<p className='idelistelement__adaptive-sctucture-row-number-info adaptiveData'>
								{number}
							</p>
						</div>
					)}
					{showConfig.weight && (
						<div className='idelistelement__adaptive-sctucture-row-weight'>
							<p className='idelistelement__adaptive-sctucture-row-weight-title adaptiveTitle'>
								Вес, кг
							</p>
							<p className='idelistelement__adaptive-sctucture-row-weight-info adaptiveData'>
								{weight}
							</p>
						</div>
					)}
				</div>
				{showConfig.volume && (
					<>
						<div className='idelistelement__adaptive-sctucture-row-volume'>
							<p className='idelistelement__adaptive-sctucture-row-volume-title adaptiveTitle'>
								Объем, в м3
							</p>
							<p className='idelistelement__adaptive-sctucture-row-volume-info adaptiveData'>
								{volume_count}
							</p>
						</div>
						{showVolume && (
							<div className='ridelistelement_sctucture-volume-preview'>
								<img
									src={volume}
									alt='скрыть'
									onClick={() => setShowVolume(false)}
								/>
							</div>
						)}
					</>
				)}
				{showConfig.road && (
					<div className='idelistelement__adaptive-sctucture-row-road'>
						<button className='ridelistelement_sctucture-road-button'>
							{exit_city}
						</button>
						
						<button className='ridelistelement_sctucture-road-button'>
							{enter_city}
						</button>
					</div>
				)}
				<div className='ridelistelement__adaptive-sctucture-date'>
					{showConfig.enter && (
						<>
							<p className='ridelistelement__adaptive-sctucture-date-main mainText'>
								{' '}
								{enter},{' '}
							</p>
							<p className='ridelistelement__adaptive-sctucture-date-side sideText'>
								{' '}
								{enter_time}{' '}
							</p>
						</>
					)}
					<img
						className='ridelistelement__adaptive-sctucture-date-image'
						src={require('../../ui/images/longLine.png')}
						alt='--'
					/>
					{showConfig.exit && (
						<>
							<p className='ridelistelement__adaptive-sctucture-date-main mainText'>
								{' '}
								{exit},{' '}
							</p>
							<p className='ridelistelement__adaptive-sctucture-date-side sideText'>
								{' '}
								{exit_time}{' '}
							</p>
						</>
					)}
				</div>
				{showConfig.duration && (
					<div className='ridelistelement__adaptive-sctucture-duration'>
						({duration})
					</div>
				)}
					<div className='ridelistelement__adaptive-sctucture-photos'>
						<Edit id={id}/>
						<Delete id={id}/>
					</div>
			</section>
		</div>
	);
}

export {RideList_element}
