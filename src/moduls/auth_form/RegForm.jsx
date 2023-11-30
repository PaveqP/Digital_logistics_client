import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { registration } from '../../responses/AuthResponses';

import './AuthForm.scss'

function RegForm() {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    console.log(surname)

    const registrationSend = (name, surname, email, password) => {
        registration(name, surname, email, password)
    }

  return (
    <div className="regform">
        <div className="regform__name">
            <p className="regform__name-title">Ваше имя</p>
            <input className="regform__name-input" type="text" placeholder='' value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className="regform__surname">
            <p className="regform__surname-title">Имя пользователя</p>
            <input className="regform__surname-input" type="text" placeholder='user' value={surname} onChange={(event) => setSurname(event.target.value)}/>
        </div>
        <div className="regform__login">
            <p className="regform__login-title">Email</p>
            <input className="regform__login-input" type="text" placeholder='your email' value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="regform__password">
            <p className="regform__login-title">Пароль</p>
            <input className="regform__login-input" type="password" placeholder='**********' value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        {/* <div className="regform__mail">
            <p className="regform__mail-title">Почта</p>
            <input className="regform__mail-input" type="text" placeholder='example@mail.ru' value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div> */}
        {/* <div className="regform__check">
            <input className="regform__check-input" type="checkbox" placeholder='**********'/>
            <p className="regform__check-title">Показывать почту на сайте</p>
            
        </div> */}
        {/* <Link to='/transits'>
            
        </Link> */}
        <button className="regform__enter" onClick={() => registrationSend(name, surname, email, password)}>
            Зарегистрироваться
        </button>
    </div>
  )
}

export {RegForm}
