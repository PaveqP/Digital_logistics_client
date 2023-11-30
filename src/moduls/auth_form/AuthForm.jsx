import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SetAuth } from '../../store/UserReducer'
import { useDispatch } from "react-redux";
import axios from 'axios'
import { store } from '../../store';
import { login } from '../../responses/AuthResponses';

import './AuthForm.scss'

function AuthForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSend = (email, password) => {
        login(email, password)
    }

  return (
    <div className="authform">
        <div className="authform__login">
            <p className="authform__login-title">Email</p>
            <input className="authform__login-input" type="text" value={email} placeholder='Почта' onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="authform__password">
            <p className="authform__login-title">Пароль</p>
            <input className="authform__login-input" type="password" value={password} placeholder='**********' onChange={(event) => setPassword(event.target.value)}/>
            <p className="authform__login-help">Забыли?</p>
        </div>
        <Link to='/'>
            <button className="authform__enter" onClick={() => loginSend(email, password)}>
                Войти
            </button>
        </Link>
        
    </div>
  )
}

export {AuthForm}
