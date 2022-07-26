import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Links from '../components/Links'

const Homepage = (props) => {

    const { factorY } = props

    const style = {
        transition: 'all 250ms ease-in-out',
        transform: `translate3d(0px, ${-100 * factorY}vh, 0px)`
    }


    return (
        <div className='homepage-ctn' id='fullpage' style={style}>
            <Hero
                bg='#084C61'
                title='Phil De Hovre'
                subtitle='Junior software developer'
                content='Self taught React/Redux frontend developer'
                textColor='white'
                id={0}
            />
            <About
                bg='#DB504A'
                title='About me'
                content=''
                textColor=''
                className='section'
                id={1}
            />
            <About
                bg='#56A3A6'
                title='My work'
                content=''
                textColor=''
                className='section'
                id={2}
            />
            <Links
                bg='#4F6D7A'
                title=''
                content=''
                textColor=''
                className='section'
                id={3}
            />
            <Contact
                bg='lightgreen'
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