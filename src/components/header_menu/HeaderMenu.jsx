import React from 'react'
import './HeaderMenu.scss'

function HeaderMenu() {
  return (
    <header className="headermenu">
        <div className="headermenu__row">
            <img className="headermenu__row-logo" src={require('../../ui/images/Logo.png')} alt="#" />
            <article className="headermenu__row-version"> v 1.0.0 </article>
        </div>
    </header>
  )
}

export {HeaderMenu}