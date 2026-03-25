import React from 'react'
import street from '../assets/street.png'

const Image = () => {
    return (
        <div>
            <img src={street} alt="Street" />

            <img src={street} alt="Street" width={'500px'} />
        </div>
    )
}

export default Image
