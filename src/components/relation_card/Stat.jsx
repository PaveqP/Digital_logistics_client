import React from 'react'

function Stat({color, text}) {
  return (
    <div className="stat">
        <div className="stat__row">
            <div className="stat__row-icon" style={{backgroundColor: color}}>
                    
            </div>
            <div className="stat__row-info" style={{color: color}}>
                {text}
            </div>
        </div>
    </div>
  )
}

export {Stat}
