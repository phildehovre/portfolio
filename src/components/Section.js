import React, { useEffect, useState } from 'react'
import './Section.css'

const Section = (props) => {

    const { children, bg, title, content, textColor, subtitle, id } = props

    const [angleY, setAngleY] = useState(0)
    const [angleX, setAngleX] = useState(0)
    const [perspective, setPerspective] = useState(750)


    window.addEventListener('pointermove', (e) => {
        let horizontalOffset = e.pageX;
        let verticalOffset = e.pageY;
        let hypothenuse = Math.sqrt(Math.pow(perspective, 2) + Math.pow(horizontalOffset, 2))
        setAngleY((Math.acos(horizontalOffset / hypothenuse)) * - 57.2958 / 3)
        setAngleX((Math.acos(verticalOffset / hypothenuse)) * 57.2958 / 3)
    })

    // window.addEventListener('click', (e) => {
    //     console.log(e.clientX - e.pageX / 2, e.pageY - e.screenY / 2)
    // })


    const styles = {
        backgroundColor: bg,
        color: textColor
    }

    const cardStyle = {
        color: textColor,
        borderColor: textColor,
        transform: `perspective(${perspective}px) 
        rotateY(${angleY}deg) 
        rotateX(${angleX}deg)`
    }


    return (
        <div data-id={id} style={styles} className='section-ctn'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className='card' style={cardStyle}>
                <p>{content}</p>
            </div>
            {children}
        </div>
    )
}

export default Section