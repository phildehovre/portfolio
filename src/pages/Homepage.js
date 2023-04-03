import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Links from '../components/Links'
// import { greyRedTheme as theme } from '../styles/themes'
import { pastelTheme as theme } from '../styles/themes'

const Homepage = (props) => {

    const { factorY, openModal } = props
    const {
        textLight,
        // extra2
        hero,
        about,
        feature1,
        feature2,
        extra1,
        textDark,
    } = theme



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
                textColor={textDark}
                className='section'
                id={1}
                content={[
                    'React.js software developer',
                    'Webdesigner',
                    'UI/UX',
                    'English, French, Dutch, Spanish',
                    'Musician',
                ]}
                linkToResume='https://res.cloudinary.com/dtnif6mzm/image/upload/v1673882874/Portfolio%20-%202022/Philippe_De_Hovre_-_Resume_2023_hyk0x0.png'
                openModal={openModal}
            />
            <About
                bg={feature1}
                title='My work'
                content={[
                    {
                        content: 'Goodles, a Google Calendar integrated to-do list',
                        url: 'https://goodles.vercel.app/#'
                    },
                    {
                        content: 'MyFy Finance/News app',
                        url: 'https://myfy-v3.vercel.app/'
                    },
                    {
                        content: 'MyFy Finance/News app',
                        url: 'https://myfy-v3.vercel.app/'
                    },
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
            <Contact
                bg={extra1}
                title='Contact'
                content={[
                    'email: ph.dehovre@gmail.com',
                    'Phone: +44(0)7907318221',
                ]}
                textColor=''
                className='section'
                additionnal='This website does not collect cookies or any personal information.'
                id={4}
            />
            <Links
                bg={feature2}
                title='Thank you'
                content='This website does not collect cookies or any personal information.'
                textColor=''
                className='section'
                id={3}
            />
        </div>
    )
}

export default Homepage