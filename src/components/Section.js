import React from 'react'
import './Section.css'
import WaterAnimation from './WaterAnimation'

const Section = (props) => {

    const { children, bg, title, content, textColor, subtitle, id, offset, additionnal } = props

    function renderContent() {
        if (typeof content === 'string') return content
        if (content[0].content) {
            return content.map((item, index) => {
                return (
                    <li
                        key={index}

                    >
                        <a
                            href={item.url}
                            target='_blank'
                            rel="noreferrer"
                        >
                            {item.content}
                        </a>
                    </li>
                )
            })
        }


        return content.map((item, index) => {
            if (item.includes('email')) {
                return (
                    <li key={index}>
                        <a id='email' mailto='ph.dehovre@gmail.com'>
                            {item}
                        </a>
                    </li>
                )
            }


            return (
                <li key={index}>{item}</li>
            )
        })
    }


    const styles = {
        backgroundColor: bg,
        color: textColor,
        marginTop: `-${offset}`
    }

    const cardStyle = {
        color: textColor,
        borderColor: textColor,
        // transform: `perspective(${perspective}px) 
        // rotateY(${angleY}deg) 
        // rotateX(${angleX}deg)`
    }


    return (
        <div data-id={id} style={styles} className='section-ctn'>
            <h1 style={{ overflow: 'visible' }}>{title}
                {id === 0 && <span className='dot' style={{ position: 'relative' }}>
                    <WaterAnimation />
                </span>}
            </h1>
            {subtitle && <h2>{subtitle}</h2>}
            {content && <div className='card' style={cardStyle}>
                {renderContent()}
                <div className='additionnal'>{additionnal}</div>

            </div>}
            {children}
        </div>
    )
}

export default Section

    // const [angleY, setAngleY] = useState(0)
    // const [angleX, setAngleX] = useState(0)
    // const [perspective, setPerspective] = useState(750)


    // window.addEventListener('pointermove', (e) => {
    //     let horizontalOffset = e.pageX;
    //     let verticalOffset = e.pageY;
    //     let hypothenuse = Math.sqrt(Math.pow(perspective, 2) + Math.pow(horizontalOffset, 2))
    //     setAngleY(-(Math.acos(horizontalOffset / hypothenuse)) * 57.2958 / 3)
    //     setAngleX((Math.acos(verticalOffset / hypothenuse)) * 57.2958 / 3)
    // })

    // window.addEventListener('click', (e) => {
    //     console.log(e.clientX - e.pageX / 2, e.pageY - e.screenY / 2)
    // })