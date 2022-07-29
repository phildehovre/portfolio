import React from 'react'
import './Nav.css'

const Nav = (props) => {

    const { theme, navbarHeight } = props

    const navStyle = {
        // backgroundColor: theme.hero,
        color: theme.textLight,
        height: navbarHeight,
    }
    return (
        <div className='nav-ctn' style={navStyle}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>My Work</li>
            </ul>
        </div>
    )
}

export default Nav