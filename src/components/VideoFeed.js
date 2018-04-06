import React from 'react';

const VideoFeed = (props) => (
  <div className={props.containerClassName}>
    <img
      className={props.className}
      src={process.env.REACT_APP_STREAM}
      alt="stream"
    />
  </div>
)

export default VideoFeed;
