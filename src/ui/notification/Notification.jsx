import React from 'react'

import './Notification.scss'

function Notification() {
  return (
    <div className="notification">
        <img className="notification__image" src={require('../images/setting.png')} alt="#" />
    </div>
  )
}

export {Notification}