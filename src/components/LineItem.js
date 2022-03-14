import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';


const LineItem = ({ city, handleDelete, handleCheck }) => {
  return (
    <li className="city">
    <input
        type="checkbox"
        onChange={() => handleCheck(city.id)}
        checked={city.checked}
    />
    <label 
        style={(city.checked) ? {textDecoration: 'line-through'} : null}
        onDoubleClick={() => handleCheck(city.id)}
    >{city.city}</label>
    <FaTrashAlt 
        role="button" 
        tabIndex="0"
        aria-label={`Delete ${city.city}`}
        onClick={() => {handleDelete(city.id)}}
    />
</li>
  )
}

export default LineItem