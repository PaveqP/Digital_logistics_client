import React, { useEffect, useState } from 'react'

import './RideList_sctruct.scss'

function RideList_sctruct({showConfig, setShowConfig, showFilter, setShowFilter}) {

    const [idChecked, setIdChecked] = useState(true)
    const [numberChecked, setNumberChecked] = useState(true)
    const [enterChecked, setEnterChecked] = useState(true)
    const [exitChecked, setExitChecked] = useState(true)
    const [durationChecked, setDurationChecked] = useState(true)
    const [weightChecked, setWeightChecked] = useState(true)
    const [volumeChecked, setVolumeChecked] = useState(false)
    const [roadChecked, setRoadChecked] = useState(false)
    const [photoChecked, setPhotoChecked] = useState(true)

    const handleIdChange = () => {
        setIdChecked(!idChecked)
        setShowConfig({...showConfig, id: !idChecked})
    }
    const handleNumberChange = () => {
        setNumberChecked(!numberChecked)
        setShowConfig({...showConfig, number: !numberChecked})
    }
    const handleEnterChange = () => {
        setEnterChecked(!enterChecked)
        setShowConfig({...showConfig, enter: !enterChecked})
    }
    const handleExitChange = () => {
        setExitChecked(!exitChecked)
        setShowConfig({...showConfig, exit: !exitChecked})
    }
    const handleDurationChange = () => {
        setDurationChecked(!durationChecked)
        setShowConfig({...showConfig, duration: !durationChecked})
    }
    const handleWeightChange = () => {
        setWeightChecked(!weightChecked)
        setShowConfig({...showConfig, weight: !weightChecked})
    }
    const handleVolumeChange = () => {
        setVolumeChecked(!volumeChecked)
        setShowConfig({...showConfig, volume: !volumeChecked})
    }
    const handleRoadChange = () => {
        setRoadChecked(!roadChecked)
        setShowConfig({...showConfig, road: !roadChecked})
    }
    const handlePhotoChange = () => {
        setPhotoChecked(!photoChecked)
        setShowConfig({...showConfig, photo: !photoChecked})
    }

    const handleGetConfig = () => {
        setShowFilter(false)
    }

  return (
    <div className="ridelistsctruct">
        
        {photoChecked && 
        <section className="ridelistsctruct_sctucture" style={{'margin-right': '160px'}}>
            {idChecked &&
                <div className="ridelistsctruct_sctucture-id element">
                    №
                </div>
            }
            {numberChecked &&
                <div className="ridelistsctruct_sctucture-number element">
                    Номер ТС
                </div>
            }
            {enterChecked &&
                <div className="ridelistsctruct_sctucture-entry element">
                    Въезд
                </div>
            }
            {exitChecked &&
                <div className="ridelistsctruct_sctucture-exit element">
                    Выезд
                </div>
            }
            {durationChecked &&
                <div className="ridelistsctruct_sctucture-duration element">
                    Длительность
                </div>
            }
            {weightChecked &&
                <div className="ridelistsctruct_sctucture-weight element">
                    Вес, кг
                </div>
            }
            {volumeChecked &&
                <div className="ridelistsctruct_sctucture-volume element">
                    Объем, в м3
                </div>
            }
            {roadChecked &&
                <div className="ridelistsctruct_sctucture-road element">
                    Маршрут
                </div>
            }
                <div className="ridelistsctruct_sctucture-photo element">
                    Действия
                </div>
        </section>
        }
        {!photoChecked &&
        <section className="ridelistsctruct_sctucture" style={{'margin-right': '0px'}}>
            {idChecked &&
                <div className="ridelistsctruct_sctucture-id element">
                    №
                </div>
            }
            {numberChecked &&
                <div className="ridelistsctruct_sctucture-number element">
                    Номер ТС
                </div>
            }
            {enterChecked &&
                <div className="ridelistsctruct_sctucture-entry element">
                    Въезд
                </div>
            }
            {exitChecked &&
                <div className="ridelistsctruct_sctucture-exit element">
                    Выезд
                </div>
            }
            {durationChecked &&
                <div className="ridelistsctruct_sctucture-duration element">
                    Длительность
                </div>
            }
            {weightChecked &&
                <div className="ridelistsctruct_sctucture-weight element">
                    Вес, кг
                </div>
            }
            {volumeChecked &&
                <div className="ridelistsctruct_sctucture-volume element">
                    Объем, в м3
                </div>
            }
            {roadChecked &&
                <div className="ridelistsctruct_sctucture-road element">
                    Маршрут
                </div>
            }
                <div className="ridelistsctruct_sctucture-photo element">
                    Действия
                </div>
        </section>
        }
        { showFilter &&
        <section className="ridelistfilter">
            <img 
                className="ridelistfilter__close" 
                src={require('../../ui/images/burger-open.png')} 
                alt="close"
                onClick={() => setShowFilter(false)} 
            />
            <h1 className="ridelistfilter__title">Конструирование отчета</h1>
            <h3 className="ridelistfilter__description">Вы можете использовать флажки для настройки отображения параметров перевозок</h3>
            <form className="ridelistfilter__inputrow">
                <p className="ridelistfilter__inputrow-element">
                    <input 
                        className="ridelistfilter__inputrow-input" 
                        name='checkfilter' 
                        type="checkbox" 
                        value='id' 
                        checked={idChecked}
                        onChange={() => handleIdChange()}
                    />№
                </p>
                <p className="ridelistfilter__inputrow-element">
                    <input 
                        className="ridelistfilter__inputrow-input" 
                        name='checkfilter' 
                        type="checkbox"
                        value='number' 
                        checked={numberChecked}
                        onChange={() => handleNumberChange()}
                    />Номер ТС
                        
                </p>
                <p className="ridelistfilter__inputrow-element">
                    <input 
                        className="ridelistfilter__inputrow-input" 
                        name='checkfilter' 
                        type="checkbox" 
                        value='enter' 
                        checked={enterChecked}
                        onChange={() => handleEnterChange()}
                    />Въезд
                </p>
                <p className="ridelistfilter__inputrow-element">
                    <input 
                        className="ridelistfilter__inputrow-input" 
                        name='checkfilter' 
                        type="checkbox" 
                        value='exit' 
                        checked={exitChecked}
                        onChange={() => handleExitChange()}
                    />Выезд
                </p>
                <p className="ridelistfilter__inputrow-element">
                    <input 
                        className="ridelistfilter__inputrow-input" 
                        name='checkfilter' 
                        type="checkbox" 
                        value='duration' 
                        checked={durationChecked}
                        onChange={() => handleDurationChange()}
                    />Длительность
                </p>
                <p className="ridelistfilter__inputrow-element">
                    <input 
                        className="ridelistfilter__inputrow-input" 
                        name='checkfilter' 
                        type="checkbox" 
                        value='weight' 
                        checked={weightChecked}
                        onChange={() => handleWeightChange()}
                    />Вес, кг
                </p>
                <p className="ridelistfilter__inputrow-element">
                    <input 
                        className="ridelistfilter__inputrow-input" 
                        name='checkfilter' 
                        type="checkbox" 
                        value='volume' 
                        checked={volumeChecked}
                        onChange={() => handleVolumeChange()}
                    />Объем, в м3
                </p>
                <p className="ridelistfilter__inputrow-element">
                    <input 
                        className="ridelistfilter__inputrow-input" 
                        name='checkfilter' 
                        type="checkbox" 
                        value='road' 
                        checked={roadChecked}
                        onChange={() => handleRoadChange()}
                    />Маршрут
                </p>
                <p>
                    <input 
                        className="ridelistfilter__inputrow-submit" 
                        type='submit'
                        id="to_send" 
                        value="Применить"
                        onClick={() => handleGetConfig()}
                    />
                </p>
            </form>
        </section >
        }
    </div>
  )
}

export {RideList_sctruct}
