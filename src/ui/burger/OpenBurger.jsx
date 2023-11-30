import React from 'react'

function OpenBurger({setAdaptive}) {
  return (
    <div className="openburger" onClick={() => setAdaptive(false)}>
        <img src={require('../images/burger-open.png')} alt="" />
    </div>
  )
}

export {OpenBurger}