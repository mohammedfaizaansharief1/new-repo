// import React from 'react'
// import PropTypes from 'prop-types'; // ES6

const VideoCard = (title, channelTitle,thumbnails) => {
    // console.log(title,channelTitle,thumbnails)

    
  return (
    <div className='border p-7'>
        {
            // img
            // title
            // description
            // views
        }
        <img src={thumbnails} alt="" />
        <h1>{title}</h1>
        <h3>{channelTitle}</h3>
    </div>
  )
}

export default VideoCard
