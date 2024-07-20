import React from 'react'

export default function TodoCard(props) {
  const {children,handleDelete,index,handleEdit} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {
          handleDelete(index)
        }}>
        <i className="fa-regular fa-trash-can"></i>
        </button>
        <button onClick={() => {
          handleEdit(index)
        }}>
        <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    </li>
  )
}
