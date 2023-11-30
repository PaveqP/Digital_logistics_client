import React from 'react'
import { HeaderMenu } from '../../components/header_menu/HeaderMenu'
import { ListMenu } from '../../components/list_menu/ListMenu'
import './Menu.scss'

function Menu() {
  return (
    <div className='menu'>
      <HeaderMenu/>
      <ListMenu/>
    </div>
  )
}

export {Menu}
