import React from 'react'
import cash from '../assets/cash.mp3';

const Audio = () => {
    return (
        <div>
            <audio src={cash} controls></audio>
        </div>
    )
}

export default Audio
