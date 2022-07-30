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
            {title === 'About me' &&
                <a className='download' target='_blank' href='https://res.cloudinary.com/dtnif6mzm/image/upload/v1659014929/Portfolio%20-%202022/Philippe_De_Hovre_-Resume_-_July2022_hht70l.png'>
                    <p>View my CV</p></a>
            }
        </Section>
    )
}

export default About