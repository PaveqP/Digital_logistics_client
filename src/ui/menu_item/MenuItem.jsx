import React from 'react'
import './MenuItem.scss'

function MenuItem(props) {

    const {image, title, mode} = props;

  return (
    <div className="menuitem">
        { mode === 'active' ?       // отображение элемента меню, если элемент активен
            <div className="menuitem__row-active">
                <img className="menuitem__row-image" src={image} alt="" />
                <article className="menuitem__row-title">{title}</article>
            </div>
          : mode === 'available' ?  // отображение элемента меню, если элемент доступен для использования
            <div className="menuitem__row-available">
                <img className="menuitem__row-image" src={image} alt="" />
                <article className="menuitem__row-title">{title}</article>
            </div>
          :                         // отображение элемента меню, если элемент недоступен
            <div className="menuitem__row-disable">
                <img className="menuitem__row-image" src={image} alt="" />
                <article className="menuitem__row-title">{title}</article>
            </div>
        }
    </div>
  )
}

export {MenuItem}