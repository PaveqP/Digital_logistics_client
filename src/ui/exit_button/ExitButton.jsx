import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Logout } from '../../store/UserReducer';
import { store } from '../../store';

import './ExitButton.scss'

function ExitButton() {

  const setLogout = () => {
    store.dispatch(Logout())
  }

  return (
    <>
      <div className="exitbutton" onClick={() => setLogout()}>
          <img className="exitbutton__image" src={require('../images/Logout_icon.png')} alt="#" />
      </div>
    </>
    
  )
}

export {ExitButton}