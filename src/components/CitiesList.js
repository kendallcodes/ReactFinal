import React from 'react'
import LineItem from './LineItem'


const CitiesList = ({ cities, handleDelete, handleCheck }) => {
  return (
    
      <ul>
            {cities.map((city) => (
               <LineItem 
                key={city.id}
                city={city}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
               />
            ))}
        </ul>
  )
}

export default CitiesList