import React, { useState } from 'react'
import { ExcelExport } from '../../ui/excel_export/ExcelExport'
import { TimeFilter } from '../time_filter/TimeFilter'
import { HeaderMenu } from '../header_menu/HeaderMenu'
import { ListMenu } from '../list_menu/ListMenu'
import { Cabinet } from '../cabinet/Cabinet'
import { Notification } from '../../ui/notification/Notification'
import { ExitButton } from '../../ui/exit_button/ExitButton'
import { Burger } from '../../ui/burger/Burger'
import { OpenBurger } from '../../ui/burger/OpenBurger'
import { Link } from 'react-router-dom'
import { AddRouteForm } from '../addRouteForm/AddRouteForm'

import './RideList_title.scss'

function RideList_title({adaptive, setAdaptive, timeInterval, setTimeInterval, showFilter, setShowFilter}) {

  return (
    <div className="rideListTitle" >
        <section className="rideListTitle__row">

            <section className="rideListTitle__column">
                <div className="rideListTitle__titlerow">
                    <h1 className="rideListTitle__column-title" > Список проездов </h1>
                    <div className="rideListTitle__filter" onClick={() => setShowFilter(!showFilter)} title='Конструирование типового отчета'>
                        <img src={require('../../ui/images/table_filter.png')} alt="filter" />
                    </div>
                </div>
                
                <TimeFilter className="rideListTitle__column-filter" timeInterval={timeInterval} setTimeInterval={setTimeInterval}/>
                <AddRouteForm/>
            </section>

            
        </section>

        <section className="rideListTitle__adaptive">
            <section className="rideListTitle__adaptive-row">
                
                <button className="rideListTitle__burger-close" onClick={() => setAdaptive(true)}>
                    <Burger/>
                </button>

                { adaptive &&
                <div className="rideListTitle__burger-open">
                    <OpenBurger className="rideListTitle__burger-open-icon" setAdaptive={setAdaptive}/>
                    <HeaderMenu/>
                    <ListMenu/>
                    <section className="rideListTitle__cabinet">
                        <section className="rideListTitle__row-burger">
                            <div className="rideListTitle__row-avatar">
                                <img src={require('../../ui/images/avatar.png')} alt="#" />
                            </div>
                            <article className="rideListTitle__row-info">
                                <div className="rideListTitle__row-info-base">
                                    <p className="rideListTitle__row-info-base-text"> Анастасия Великая </p>
                                    <div className="rideListTitle__row-info-base-images">
                                        <img className="rideListTitle__row-info-base-images-default" src={require('../../ui/images/Profile_button.png')} alt="#" />
                                        <img className="rideListTitle__row-info-base-images-hover" src={require('../../ui/images/Profile_button_hover.png')} alt="#" />
                                    </div>
                                </div>
                                <div className="rideListTitle__row-info-time">
                                    45 минут назад
                                </div>
                            </article>
                        </section>
                        <div className="rideListTitle__burger-open-buttons">
                            <button className="rideListTitle__burger-open-buttons-notify"></button>
                            <Link to='/'><button className="rideListTitle__burger-open-buttons-exit"></button></Link>
                        </div>
                    </section>
                    
                </div> 
                }
                
                <h1 className="rideListTitle__column-adaptive-title"> Список проездов </h1>

                <div className="rideListTitle__column-adaptive-notification">
                    <Notification/>
                </div>
            </section>

            <ExcelExport className="rideListTitle__row-adaptive-export"/>

            <TimeFilter className="rideListTitle__row-adaptive-export" timeInterval={timeInterval} setTimeInterval={setTimeInterval}/>

            <AddRouteForm/>
            
        </section>

    </div>
  )
}

export {RideList_title}
