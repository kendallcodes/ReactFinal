import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react'; 

const AddCity = ({ newCity, setNewCity, handleSubmit }) => {
const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addCity'>Add City</label>
        <input
            autoFocus
            ref={inputRef}
            id="addItem"
            type="text"
            placeholder='Add a city here....'
            required
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
        />
        <button
            type="submit"
            aria-label="Add City"
            onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
        </form>
  )
}

export default AddCity