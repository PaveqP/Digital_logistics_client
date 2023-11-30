import React from 'react'
import {Notification} from '../../ui/notification/Notification'
import { useSelector } from "react-redux";
import {ExitButton} from '../../ui/exit_button/ExitButton'

import './Cabinet.scss'

function Cabinet() {

    const user = useSelector(state => state.user.currentUser)

  return (
    <div className="cabinet">
        <section className="cabinet__row">
            <div className="cabinet__row-avatar">
                <img className='cabinet__row-avatar-image' src={require('../../ui/images/user.png')} alt="#" />
            </div>
            <article className="cabinet__row-info">
                <div className="cabinet__row-info-base">
                    <p className="cabinet__row-info-base-text"> {user.name} {user.surname} </p>
                    <div className="cabinet__row-info-base-images">
                        <img className="cabinet__row-info-base-images-default" src={require('../../ui/images/Profile_button.png')} alt="#" />
                        <img className="cabinet__row-info-base-images-hover" src={require('../../ui/images/Profile_button_hover.png')} alt="#" />
                    </div>
                </div>
                <div className="cabinet__row-info-time">
                    {user.login}
                </div>
            </article>
            <div className="cabinet__row-actions">
                <Notification className="cabinet__row-actions-notify action_button"/>
                <ExitButton className="cabinet__row-actions-logout action_button"/>
            </div>
        </section>
    </div>
  )
}

export {Cabinet}
