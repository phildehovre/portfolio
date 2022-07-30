import React from 'react'
import './Nav.css'

const Nav = (props) => {

    const { theme, navbarHeight, factorY } = props

    const navStyle = {
        color: theme.textDark,
        height: navbarHeight,
    }

    const nav = ['Home', 'About', 'My Work', 'Contact']

    const renderNav = () => {
        return nav.map((item, index) => {
            return (
                <li key={index} className={`navItem ${factorY === index ? 'active' : ''}`}>{item}</li>
            )
        })
    }


    return (
        <div className='nav-ctn' style={navStyle}>
            <ul>
                {renderNav()}
            </ul>
        </div>
    )
}

export default Nav