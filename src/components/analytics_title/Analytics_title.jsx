import React from 'react'
import {BigExcelExport} from '../../ui/excel_export/BigExcelExport'
import { Analytics_filter } from '../analytics_filter/Analytics_filter'
import { HeaderMenu } from '../header_menu/HeaderMenu'
import { ListMenu } from '../list_menu/ListMenu'
import { Cabinet } from '../cabinet/Cabinet'
import { Notification } from '../../ui/notification/Notification'
import { ExitButton } from '../../ui/exit_button/ExitButton'
import { Burger } from '../../ui/burger/Burger'
import { OpenBurger } from '../../ui/burger/OpenBurger'
import { Link } from 'react-router-dom'

import './Analytics_title.scss'

function Analytics_title({adaptive, setAdaptive, companies, career, setCareer, period, setPeriod, company, setCompany, handleCareerChange, handlePeriodChange, handleCompanyChange}) {

    console.log(companies)

  return (
    <div className="analyticstitle">
        <section className="analyticstitle__row">

            <section className="analyticstitle__column">
                <h1 className="analyticstitle__column-title"> Аналитика </h1>
                <Analytics_filter className="analyticstitle__column-filter" 
                    companies={companies}
                    adaptive={adaptive} 
                    setAdaptive={setAdaptive} 
                    career={career} 
                    setCareer={setCareer} 
                    period={period} 
                    setPeriod={setPeriod} 
                    company={company} 
                    setCompany={setCompany} 
                    handleCareerChange={handleCareerChange}
                    handlePeriodChange={handlePeriodChange}
                    handleCompanyChange={handleCompanyChange}
                />
            </section>

            
        </section>

        <section className="analyticstitle__adaptive">
            <section className="analyticstitle__adaptive-row">
                
                <button className="analyticstitle__burger-close" onClick={() => setAdaptive(true)}>
                    <Burger/>
                </button>

                { adaptive &&
                <div className="analyticstitle__burger-open">
                    <OpenBurger className="analyticstitle__burger-open-icon" setAdaptive={setAdaptive}/>
                    <HeaderMenu/>
                    <ListMenu/>
                    <section className="analyticstitle__cabinet">
                        <section className="analyticstitle__row-burger">
                            <div className="analyticstitle__row-avatar">
                                <img src={require('../../ui/images/avatar.png')} alt="#" />
                            </div>
                            <article className="analyticstitle__row-info">
                                <div className="analyticstitle__row-info-base">
                                    <p className="analyticstitle__row-info-base-text"> Анастасия Великая </p>
                                    <div className="analyticstitle__row-info-base-images">
                                        <img className="analyticstitle__row-info-base-images-default" src={require('../../ui/images/Profile_button.png')} alt="#" />
                                        <img className="analyticstitle__row-info-base-images-hover" src={require('../../ui/images/Profile_button_hover.png')} alt="#" />
                                    </div>
                                </div>
                                <div className="analyticstitle__row-info-time">
                                    45 минут назад
                                </div>
                            </article>
                        </section>
                        <div className="analyticstitle__burger-open-buttons">
                            <button className="analyticstitle__burger-open-buttons-notify"></button>
                            <Link to='/'><button className="analyticstitle__burger-open-buttons-exit"></button></Link>
                        </div>
                    </section>
                    
                </div> 
                }
                
                <h1 className="analyticstitle__column-adaptive-title"> Аналитика </h1>

                <div className="analyticstitle__column-adaptive-notification">
                    <Notification/>
                </div>
            </section>

            <BigExcelExport className="analyticstitle__row-adaptive-export"/>

            <Analytics_filter className="analyticstitle__row-adaptive-export" companies={companies}/>
        </section>
    </div>
  )
}

export {Analytics_title}
