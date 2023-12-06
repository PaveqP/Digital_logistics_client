import React from 'react'
import './Loader.scss'

function Loader() {
  return (
    <div className='loader'>
        <p className='loader__title'>Мы не нашли информацию о ваших маршрутах</p>
        <p className='loader__subtitle'>Добавьте первый маршрут, нажав кнопку "Добавить поездку"</p>
        <img className='loader__image' src={require('../../ui/images/LOader_img.png')} alt="" />
    </div>
  )
}

export {Loader}
