import React from 'react';
import YouTube from 'react-youtube';
 
class Video extends React.Component {
  render() {
    const opts = {
      // height: '720',
      // width: '1280',
     
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        color: 'white',
        showinfo:0,
        // onPlaybackRateChange: true,
        // onPlaybackQualityChange: true,
        // onPlay: true,
        // onEnd: false,
      
    };
 
    return <YouTube videoId="q6mZlo_omu0" opts={opts} onReady={this._onReady} className="video" />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default Video;
