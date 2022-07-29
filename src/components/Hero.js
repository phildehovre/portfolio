import React from 'react'
import Section from './Section'
import './Hero.css'
// import WaterAnimation from './WaterAnimation'

const Hero = (props) => {

    const { textColor } = props

    const buttonStyle = {
        color: textColor,
        borderColor: 'black',
    }
    const swipeStyle = {
        color: textColor,
        borderColor: textColor,
    }

    return (
        <Section {...props}>
            {/* <WaterAnimation /> */}
            <div id='swipe-instructions' style={buttonStyle}>Scroll down or swipe up
                <div id='swipe-btn' style={swipeStyle}></div>
            </div>
        </Section>
    )
}

export default Hero