import React, { useEffect, useState } from 'react'
import './NavButton.css'

const NavButton = (props) => {

    const [active, setActive] = useState(false)

    const { id, pageNumber, navTo } = props

    useEffect(() => {
        id === pageNumber ? setActive(true) : setActive(false)
    }, [id, pageNumber])

    return (
        <div className={`nav-btn ${active ? 'active' : ''}`} onClick={() => { navTo(id) }}></div>
    )
}

export default NavButton