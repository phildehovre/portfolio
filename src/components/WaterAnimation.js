import React, { useState } from 'react'
import './WaterAnimation.css'

const WaterAnimation = () => {

    const [perspective, setPerspective] = useState(100)
    const [angleX, setAngleX] = useState(0)
    const [angleY, setAngleY] = useState(0)

    const effect = {
        transform:
            `perspective(${perspective}px) 
             rotateY(${angleY}deg) 
             rotateX(${angleX}deg)`
    }

    return (<>

        <div className='water-ctn' style={effect}></div>
        <div className='circle-ctn' style={effect}></div>
    </>
    )
}

export default WaterAnimation