import React from 'react'
import { useState, useEffect } from 'react'

const Deity = () => {
const [deity, setDeity] = useState("")

const handleSearch = (search) => {
const filteredDeity = deity.filter((deity, index ) => {
        return deity.name.toLowerCase() === search.toLowerCase()
        })
        setDeity(filteredDeity)
    }

    return (
        <div>

        </div>
    )
}

export default Deity