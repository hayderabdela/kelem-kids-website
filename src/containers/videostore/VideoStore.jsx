import React from 'react'
import video from "../../assets/ll.mp4"

function VideoStore() {
  return (
    <div>
      <video  controls width={400} autoPlay>

        <source src={video} type="video/mp4" />
        
      </video>
    </div>
  )
}

export default VideoStore