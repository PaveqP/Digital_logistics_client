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

    const [showPass, setShowPass] = useState(false)

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
            <input className="regform__surname-input" type="text" placeholder='' value={surname} onChange={(event) => setSurname(event.target.value)}/>
        </div>
        <div className="regform__login">
            <p className="regform__login-title">Email</p>
            <input className="regform__login-input" type="text" placeholder='your email' value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="regform__password">
            <p className="regform__login-title">Пароль</p>
            {showPass ?
                <input className="regform__login-input" type="password" placeholder='**********' value={password} onChange={(event) => setPassword(event.target.value)}/>
                :
                <input className="regform__login-input" type="text" placeholder='**********' value={password} onChange={(event) => setPassword(event.target.value)}/>
            }
            {showPass ?
                <p className="regform__login-help" onClick={() => setShowPass(!showPass)}>Показать</p>
                :
                <p className="regform__login-help" onClick={() => setShowPass(!showPass)}>Скрыть</p>
            }
        </div>

        <button className="regform__enter" onClick={() => registrationSend(name, surname, email, password)}>
            Зарегистрироваться
        </button>
    </div>
  )
}

export {RegForm}
