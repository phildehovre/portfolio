import React from 'react'
import Section from './Section'
import './About.css'

const About = (props) => {

    const { title, openModal } = props

    const btnStyle = {
        border: '2px solid black',
        padding: '1em',
        backgroundColor: 'white',
        marginTop: '1em',
        borderRadius: '10px',
        cursor: 'pointer'
    }

    return (
        <Section {...props}>
            {title === 'About me' && <div className='download-btn' style={btnStyle}
                onClick={() => { openModal() }}
            >View my CV</div>}
        </Section>
    )
}

export default About