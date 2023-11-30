import React from 'react'

import './ExcelExport.scss'

function ExcelExport() {
  return (
    <button className="excelexport">
        <section className="excelexport__row">
            <img className="excelexport__row-image" src={require('../images/Xls_convert_button.png')} alt='#'></img>
            <p className="excelexport__row-text">
                Скачать в .xls
            </p>
        </section>
    </button>
  )
}

export {ExcelExport}
