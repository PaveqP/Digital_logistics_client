import React, { useState } from 'react'
import { AuthForm } from '../../moduls/auth_form/AuthForm'
import { RegForm } from '../../moduls/auth_form/RegForm'

import './Auth_page.scss'

function Auth_page() {

  const [type, setType] = useState('auth')

  return (
    <div className="auth">
      <section className="auth__column">
        <img className="auth__column-logo" src={require('../../ui/images/auth_logo.png')} alt="logo" />

        <div className="auth__column-form">
          <div className="auth__column-form-title">
            { type === 'auth' &&
              <>
                <div className="auth__column-form-title-row">
                  <p className="authform__title-enter-active" onClick={() => {setType('auth')}}>Вход</p>
                  <p className="authform__title-reg" onClick={() => {setType('reg')}}>Регистрация</p>
                </div>
                <AuthForm/>
              </>
            }

            { type === 'reg' &&
              <>
                <div className="auth__column-form-title-row">
                  <p className="authform__title-enter" onClick={() => {setType('auth')}}>Вход</p>
                  <p className="authform__title-reg-active" onClick={() => {setType('reg')}}>Регистрация</p>
                </div>
                <RegForm/>
              </>
            }
            
          </div>
        </div>
      </section>
    </div>
  )
}

export {Auth_page}
