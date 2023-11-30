import React, { useState } from 'react'

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
            highlighted,
			volume_count
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
		<div className={`ridelistelement ${highlighted ? 'highlighted' : ''}`}>
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
							<img
								src={require('../../ui/images/volume_preview.png')}
								alt='показать'
								onClick={() => setShowVolume(!showVolume)}
							/>
							<p>{volume_count}</p>
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
							<button
								className='ridelistelement_sctucture-road-button'
								onClick={() => setShowRoad(!showRoad)}
							>
								Показать
							</button>
						</div>
						{showRoad && (
							<div className='ridelistelement_sctucture-road-popup'>
								<div className='ridelistelement_sctucture-road-popup-structure'>
									<div className='ridelistelement_sctucture-road-popup-photo'>
										{!updateRoad ? (
											<img
												src={
													getRoutes(road)
														? getRoutes(road)[0]
														: require('../../ui/images/route-placeholder.png')
												}
												alt=''
											/>
										) : (
											<img
												src={
													getRoutes(road)
														? getRoutes(road)[1]
														: require('../../ui/images/route-placeholder.png')
												}
												alt=''
											/>
										)}
									</div>
									<div className='ridelistelement_sctucture-road-popup-buttons'>
										<button
											className='ridelistelement_sctucture-road-popup-button'
											onClick={() => setUpdateRoad(true)}
										>
											Актуализировать
										</button>
										<button
											className='ridelistelement_sctucture-road-popup-button'
											onClick={() => setUpdateRoad(false)}
										>
											Предыдущий
										</button>
										<button
											className='ridelistelement_sctucture-road-popup-button'
											onClick={() => setShowRoad(false)}
										>
											Закрыть
										</button>
									</div>
								</div>
							</div>
						)}
					</>
				)}
				{showConfig.photo && (
					<div className='ridelistelement_sctucture-photos data'>
						<img
							className='ridelistelement_sctucture-photo'
							src={
								getPhotos(photo)
									? getPhotos(photo)[0]
									: require('../../ui/images/placeholder.png')
							}
							alt='image'
							loading='lazy'
							height='60'
							width='90'
							onClick={() => setPopup1(true)}
						/>

						<img
							className='ridelistelement_sctucture-photo'
							src={
								getPhotos(photo)
									? getPhotos(photo)[1]
									: require('../../ui/images/placeholder.png')
							}
							alt='image'
							loading='lazy'
							height='60'
							width='90'
							onClick={() => setPopup2(true)}
						/>
						{popup1 && (
							<section className='popup__image'>
								<img
									className='ridelistelement__sctucture-photo-popup-icon'
									src={require('../../ui/images/popup.png')}
									onClick={() => setPopup1(false)}
									alt='image'
									loading='lazy'
								></img>
								<img
									className='ridelistelement__sctucture-photo-popup'
									src={
										getPhotos(photo)
											? getPhotos(photo)[0]
											: require('../../ui/images/placeholder.png')
									}
									alt='image'
									id='popup'
									loading='lazy'
									height='480'
									width='750'
								/>
							</section>
						)}
						{popup2 && (
							<section className='popup__image'>
								<img
									className='ridelistelement__sctucture-photo-popup-icon'
									src={require('../../ui/images/popup.png')}
									onClick={() => setPopup2(false)}
									alt='image'
									loading='lazy'
								></img>
								<img
									className='ridelistelement__sctucture-photo-popup'
									src={
										getPhotos(photo)
											? getPhotos(photo)[1]
											: require('../../ui/images/placeholder.png')
									}
									alt='image'
									id='popup'
									loading='lazy'
									height='480'
									width='750'
								/>
							</section>
						)}
					</div>
				)}
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
								<img
									src={require('../../ui/images/volume_preview.png')}
									alt='показать'
									onClick={() => setShowVolume(!showVolume)}
								/>
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
						<p className='idelistelement__adaptive-sctucture-row-road-title adaptiveTitle'>
							Маршрут
						</p>
						<p className='idelistelement__adaptive-sctucture-row-road-info adaptiveData'>
							{road}
						</p>
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
				{showConfig.photo && (
					<div className='ridelistelement__adaptive-sctucture-photos'>
						<img
							className='ridelistelement__adaptive-sctucture-photo'
							src={
								getPhotos(photo)
									? getPhotos(photo)[0]
									: require('../../ui/images/placeholder.png')
							}
							alt='image'
							loading='lazy'
							onClick={() => setPopup1(true)}
							height='100'
							width='160'
						/>
						<img
							className='ridelistelement__adaptive-sctucture-photo'
							src={
								getPhotos(photo)
									? getPhotos(photo)[1]
									: require('../../ui/images/placeholder.png')
							}
							alt='image'
							loading='lazy'
							height='100'
							width='160'
							onClick={() => setPopup2(true)}
						/>
						{popup1 && (
							<section className='popup__image'>
								<img
									className='ridelistelement__adaptive-sctucture-photo-popup-icon'
									src={require('../../ui/images/popup.png')}
									onClick={() => setPopup1(false)}
									alt='image'
									loading='lazy'
								></img>
								<img
									className='ridelistelement__adaptive-sctucture-photo-popup'
									src={
										getPhotos(photo)
											? getPhotos(photo)[0]
											: require('../../ui/images/placeholder.png')
									}
									alt='image'
									id='popup'
									loading='lazy'
									height='188'
									width='299'
								/>
							</section>
						)}
						{popup2 && (
							<section className='popup__image'>
								<img
									className='ridelistelement__adaptive-sctucture-photo-popup-icon'
									src={require('../../ui/images/popup.png')}
									onClick={() => setPopup2(false)}
									alt='image'
									loading='lazy'
								></img>
								<img
									className='ridelistelement__adaptive-sctucture-photo-popup'
									src={
										getPhotos(photo)
											? getPhotos(photo)[1]
											: require('../../ui/images/placeholder.png')
									}
									alt='image'
									id='popup'
									loading='lazy'
									height='188'
									width='299'
								/>
							</section>
						)}
					</div>
				)}
			</section>
		</div>
	);
}

export {RideList_element}
