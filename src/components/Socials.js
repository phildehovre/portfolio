import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './Socials.css'

const Socials = () => {
    return (
        <div className='socials'>
            <a href='https://www.linkedin.com/in/philippe-de-hovre-7913991b3/' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='3x' />
            </a>
            <a href='https://github.com/phildehovre' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='3x' />
            </a>
        </div>
    )
}

export default Socials
