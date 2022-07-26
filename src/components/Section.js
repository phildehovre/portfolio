import React from 'react'
import './Section.css'

const Section = (props) => {

    const { children, bg, title, content, textColor, subtitle, id } = props


    const styles = {
        backgroundColor: bg,
        color: textColor
    }

    const cardStyle = {
        color: textColor,
        borderColor: textColor
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