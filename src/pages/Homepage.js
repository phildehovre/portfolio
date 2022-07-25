import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Links from '../components/Links'

const Homepage = () => {
    return (
        <div className='homepage-ctn'>
            <Hero
                bg='#084C61'
                title='Phil De Hovre'
                subtitle='Junior software developer'
                content=''
                textColor='white'
            />
            <About
                bg='#DB504A'
                title='About me'
                content=''
                textColor=''
            />
            <About
                bg='#56A3A6'
                title='My work'
                content=''
                textColor=''
            />
            <Links
                bg='#4F6D7A'
                title=''
                content=''
                textColor=''
            />
            <Contact
                bg='#E2E2E2'
                title=''
                content=''
                textColor=''
            />
        </div>
    )
}

export default Homepage