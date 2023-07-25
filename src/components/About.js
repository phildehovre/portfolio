import React from 'react'
import Section from './Section'
import './About.css'
// import { text } from '@fortawesome/fontawesome-svg-core'

const About = (props) => {

    const {
        title,
        // openModal,
        textColor,
        linkToResume
    } = props

    const btnStyle = {
        border: '2px solid black',
        padding: '1em',
        backgroundColor: 'white',
        marginTop: '1em',
        borderRadius: '10px',
        cursor: 'pointer',
        color: textColor
    }

    return (
        <Section {...props}>
            {title === 'About me' &&
                <a className='download' style={btnStyle} rel='noreferrer' target='_blank' href='https://drive.google.com/file/d/1NfN9R0HJ6gS2m4DMC4DOCAU2261c1Hrq/view?usp=sharing' download>
                    <p>View my CV</p></a>
            }
        </Section>
    )
}

export default About