import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const SearchBar = (handleSearch) => {
const [input, setInput] = useState("")

const handleOnChange = (event) => {
    setInput(event.target.value)
}

    return (
        <div className='search-bar'>
            <input
            type='text'
            onChange={handleOnChange}
            placeholder='Whom Do You Seek...'
            />
            <button onClick={() => handleSearch(input)}>Submit</button>
        </div>
    )
}

export default SearchBar