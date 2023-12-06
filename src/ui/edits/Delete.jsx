import React from 'react'
import './Edits.scss'
import { deleteRoute } from '../../responses/RoutesResponses'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Edit } from './Edit'

function Delete({id}) {

  const token = useSelector(state => state.user.token)

  const sendDeleteResponse = (id) => {
    let needDelete = window.confirm(`Удалить запись о поездке ${id}?`)
    needDelete && deleteRoute(id, token)
  }
  
  return (
    <div className='delete' onClick={() => sendDeleteResponse(id)}>
        <img className='delete__image' src={require('../images/delete.png')}/>
    </div>
  )
}

export {Delete}