import React, { useEffect, useState } from 'react'
import './NavButton.css'

const NavButton = (props) => {

    const [active, setActive] = useState(false)

    const { id, pageNumber } = props

    useEffect(() => {
        id === pageNumber ? setActive(true) : setActive(false)
    })

    return (
        <div className={`nav-btn ${active ? 'active' : ''}`}></div>
    )
}

export default NavButton