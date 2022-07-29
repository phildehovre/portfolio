import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Links from '../components/Links'
import { greenYellowTheme } from '../styles/themes'

const Homepage = (props) => {

    const { factorY, openModal, offset } = props
    // const { hero, about, feature1, feature2, contact, footer } = greenYellowTheme
    const { hero, about, feature1, feature2, extra1, textLight, textDark, extra2 } = greenYellowTheme



    const style = {
        transition: 'all 250ms ease-in-out',
        transform: `translate3d(0px, ${-100 * factorY}vh, 0px)`
    }




    return (
        <div className='homepage-ctn' id='fullpage' style={style}>
            <Hero
                bg={hero}
                title='Philippe De Hovre'
                subtitle='Junior software developer'
                textColor={textDark}
                id={0}
                content=''
            />
            <About
                bg={about}
                title='About me'
                textColor=''
                className='section'
                id={1}
                content={[
                    'React.js software developer',
                    'Human Ressources graduate',
                    'English, French, Dutch, Spanish',
                    'Professional touring musician',
                ]}
                openModal={openModal}
            />
            <About
                bg={feature1}
                title='My work'
                content={[
                    {
                        content: 'Bedmar Music',
                        url: 'http://bedmarmusic.co.uk'
                    },
                    {
                        content: 'MyMetronome app',
                        url: 'http://metronomeapp.vercel.app'
                    },
                ]}
                textColor=''
                className='section'
                id={2}
            />
            <Links
                bg={feature2}
                title='Links'
                content=''
                textColor=''
                className='section'
                id={3}
            />
            <Contact
                bg={extra1}
                title=''
                content=''
                textColor=''
                className='section'
                id={4}
            />
        </div>
    )
}

export default Homepage