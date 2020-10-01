import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';




const Video = (props) => {

  let history = useHistory();

  let player;
  let YT;
  let location = useLocation();
  let videoId = location.state.videoId;

  useEffect(() => {
    console.log('videoId inside video component ', videoId);
    // https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution
    // check if api is loaded
    if (!window.YT) { // if not, load
      // 2. This code loads the IFrame Player API code asynchronously.
      const tag = document.createElement('script');

      tag.id = 'YT-script';
      tag.async = true;

      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo;

      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // document.body.appendChild(tag);

    } else {
      loadVideo();
    }
    


  });

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.

  const loadVideo = () => {
    // const id  = videoId;

    // the Player object is created uniquely based on the id in props
    player = new window.YT.Player('player', {
      height: '390',
      width: '640',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {rel: 0}
    });
  };

  // 4. The API will call this function when the video player is ready.
  const onPlayerReady = (event) => {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  let done = false;

  // player states
  // YT.PlayerState.ENDED
  // YT.PlayerState.PLAYING
  // YT.PlayerState.PAUSED
  // YT.PlayerState.BUFFERING
  // YT.PlayerState.CUED
  const onPlayerStateChange = (event) => {
    switch (event.data ) {
      case window.YT.PlayerState.PLAYING:
        if (!done) {
          setTimeout(stopVideo, 6000);
        done = true;
        }
        break;
      
      case window.YT.PlayerState.PAUSED:
        // in seconds
        console.log(player.getCurrentTime());
        break;
    }


  }
  const stopVideo = () => {
    player.stopVideo();
    console.log(window.YT.PlayerState);
    console.log(player);
  }

  const goBack = () => {
    console.log('goBack');
    history.push('/search');
  }


  return (
    <div id='video'>

        <div id="player">
      
        </div>
        <button onClick={goBack}>Back</button>
    </div>
  );

}

export default withRouter(Video);
