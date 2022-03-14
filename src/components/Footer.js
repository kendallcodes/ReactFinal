import React from 'react'

const Footer = ({length}) => {

    
  return (
      
    <footer>
        <p>{length} Cities List {length === 1 ? "city" : "cities" }</p>    
    </footer>
  )
}

export default Footer