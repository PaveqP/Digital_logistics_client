import React, { useEffect, useState } from 'react'
import { MenuItem } from '../../ui/menu_item/MenuItem'
import { Link } from 'react-router-dom'

import './ListMenu.scss'

function ListMenu() {

  const [mode1, setMode1] = useState('available')
  const [mode2, setMode2] = useState('available')

  const urlMode = (pathname) => {
    if (pathname === '/transits'){
      setMode1('active')
      setMode2('available')
    }
    if (pathname === '/analytics'){
      setMode1('available')
      setMode2('active')
    }
  }

  useEffect(() => {
    let url = window.location.pathname
    url && urlMode(url)
  })

  return (
    <div className="listmenu">
        <Link to='/'>
          <MenuItem 
            className="listmenu__item-active item" 
            image={require('../../ui/images/Delivery_icon.png')} 
            title='Список проездов' 
            mode={mode1}
          />
        </Link>
        <Link to='/analytics'>
          <MenuItem 
            className="listmenu__item-active item" 
            image={require('../../ui/images/Analytics_icon.png')} 
            title='Аналитика' 
            mode={mode2}
          />
        </Link>
        <MenuItem className="listmenu__item-disable item" image={require('../../ui/images/Reports_icon.png')} title='Отчеты' mode='disable'/>
        <MenuItem className="listmenu__item-disable item" image={require('../../ui/images/Stuff_icon.png')} title='Сотрудники' mode='disable'/>
    </div>
  )
}

export {ListMenu}
