import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';


import { useNote, useChangeNote } from '../custom-hooks/NoteProvider';


const Video = (props) => {
  
  console.log('rendered!');
  console.log(props);

  // let history = useHistory();

  // let player;
  // let YT;
  // let location = useLocation();
  // let videoId = location.state.videoId;

  // global state for note-taking information using React Context API
  const note = useNote();
  // note: note is object type
  // const changeNote = useChangeNote();

  let videoId = note.videoId;

  console.log('videoId inside video ', videoId);

  // if(window.YT) {
    // delete window.YT;
    // window.YT = undefined;
    // window.onYouTubeIframeAPIReady = undefined;
    // window.onYTReady = undefined;

    // delete window.YT;
    // delete window.onYouTubeIframeAPIReady;
    // delete window.onYTReady;
  // }
  // useEffect(() => {
   // https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution
      // check if api is loaded

      // console.log('videoId inside video component ', videoId);
      // if(!loaded) {
      // console.log('not loaded');
      // setInterval(() => { 
        if (!window.YT) {
         // if not, load
        // 2. This code loads the IFrame Player API code asynchronously.
        if(document.getElementById('YT-script')) {
          document.getElementById('YT-script').remove();
        } 
        const tag = document.createElement('script');
        tag.id = 'YT-script';
        tag.async = true;
        tag.crossorigin = '';
        tag.src = 'https://www.youtube.com/iframe_api';
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        document.body.appendChild(tag);
        // onYouTubeIframeAPIReady will load the video after the script is loaded
        // window.onYouTubeIframeAPIReady = loadVideo;

      // } 
      // else {
        // onYouTubeIframeAPIReady will load the video after the script is loaded
        // window.onYouTubeIframeAPIReady = loadVideo;
        // loadVideo();
      }

              
    // }, 100);
    //   loaded = true;
    // }

  // useEffect(() => {
  //   loadVideo();
  // });
  // window.addEventListener('DOMContentLoaded', () => {
  //   loadVideo();
  // });
 

    
  // });

  
     // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.

  
  window.onYouTubeIframeAPIReady = () => {
    // const id  = videoId;
    

    
    // 4. The API will call this function when the video player is ready.
    const onPlayerReady = (event) => {
      // event.target.mute();
      // event.target.playVideo();
    }




  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  // let done = false;

  // player states
  // YT.PlayerState.ENDED
  // YT.PlayerState.PLAYING
  // YT.PlayerState.PAUSED
  // YT.PlayerState.BUFFERING
  // YT.PlayerState.CUED
  const onPlayerStateChange = (event) => {
    switch (event.data) {
      case window.YT.PlayerState.PLAYING:
        // if (!done) {
        //   setTimeout(stopVideo, 6000);
        // done = true;
        // }
        break;
      
      case window.YT.PlayerState.PAUSED:
        // in seconds
        // console.log(player.getCurrentTime());
        let currTime = player.getCurrentTime();
        // changeNote('currentTime', player.getCurrentTime());
        props.changeState(currTime);
        // setTimeout(console.log('current note state is ', note), 3000);
        break;
    }
  }

    // the Player object is created uniquely based on the id in props
    const player = new window.YT.Player('player', {
      host: 'https://www.youtube.com',
      height: '390',
      width: '640',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {rel: 0}
      //  origin: 'https://localhost:3000', widget_referrer: window.location.href
    });
  };


 


  // const stopVideo = () => {
  //   player.stopVideo();
  //   console.log(window.YT.PlayerState);
  //   console.log(player);
  // }
    



  




  // onYouTubeIframeAPIReady will load the video after the script is loaded
  // window.onYouTubeIframeAPIReady = loadVideo;

  console.log('window YT', window.YT);



  return (
    <div id='video'>
        <div id="player">
        </div>

    </div>
  );

}


const VideoMemo = React.memo(Video);

// export default withRouter(VideoMemo);

export default VideoMemo;
