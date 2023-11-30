import React from 'react'

import './ExcelExport.scss'

function BigExcelExport() {
  return (
    <button className="bigexcelexport">
        <section className="bigexcelexport__row">
            <img className="bigexcelexport__row-image" src={require('../images/Xls_convert_button.png')} alt='#'></img>
            <p className="bigexcelexport__row-text">
                Скачать отчёт в .xls
            </p>
        </section>
    </button>
  )
}

export {BigExcelExport}
