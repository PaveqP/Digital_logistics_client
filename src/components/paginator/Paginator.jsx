import React from 'react'

import './Paginator.scss'

function Paginator({dataPerPage, totalData, paginate, currentPage}) {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalData / dataPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <div className="paginator">
        <section className="paginator__row">
            {
                pageNumbers.map((number) => (
                    number === 1 ?
                    <button className="paginator__row-1 pagbutton" key={number} onClick={() => paginate(number)}>
                        {number}
                    </button>
                    :
                    <button className="paginator__row-number pagbutton" key={number} onClick={() => paginate(number)}>
                        {number}
                    </button>
                ))
            }
            <button className="paginator__row-next pagbutton" onClick={() => {
                if(currentPage < pageNumbers.length) paginate(currentPage + 1)
            }}>
                Вперёд
            </button>
        </section>
    </div>
  )

//   <button className="paginator__row-1 pagbutton">
//                 1
//             </button>
//             <button className="paginator__row-2 pagbutton">
//                 2
//             </button>
//             <button className="paginator__row-3 pagbutton">
//                 3
//             </button>
//             <button className="paginator__row-4 pagbutton">
//                 4
//             </button>
//             <button className="paginator__row-5 pagbutton">
//                 5
//             </button>
//             <button className="paginator__row-next pagbutton">
//                 Вперёд
//             </button>
}

export {Paginator}
