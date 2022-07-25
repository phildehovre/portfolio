import React from 'react'
import './Section.css'

const Section = (props) => {

    const { children, bg, title, content, textColor, subtitle } = props


    const styles = {
        backgroundColor: bg,
        color: textColor
    }

    return (
        <div style={styles} className='section-ctn'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className='card'>
                <p>{content}</p>
            </div>
            {children}
        </div>
    )
}

export default Section