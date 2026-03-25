import React from 'react'
import nature from '../assets/nature.mp4';


const Video = () => {
  return (
    <div>

      <video width="320" height="240" controls>
        <source src={nature} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  )
}

export default Video
