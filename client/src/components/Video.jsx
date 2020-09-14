import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const Video = (props) => {

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

  

  // const loadVideo = () => {
  //   let idFromState = videoId;
  //   console.log('idFromState is ', idFromState);
  //   // 3. This function creates an <iframe> (and YouTube player)
  //   //    after the API code downloads.
    
  //   const onYouTubeIframeAPIReady = () => {
  //     // will replace div with id 'player' with an iframe
  //     player = new YT.Player('player', {
  //       height: '390',
  //       width: '640',
  //       videoId: idFromState,
  //       events: {
  //         'onReady': onPlayerReady,
  //         'onStateChange': onPlayerStateChange
  //       },
  //       playerVars: {rel: 0}
  //     });
  //   }
  // }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == window.YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

// });

//   // 2. This code loads the IFrame Player API code asynchronously.
//   var tag = document.createElement('script');
//   tag.async = true;
//   tag.type = 'text/javascript';

//   tag.src = "https://www.youtube.com/iframe_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   useEffect(() => {

  
//   document.addEventListener('DOMContentLoaded', () => {


  
  

//   // 3. This function creates an <iframe> (and YouTube player)
//   //    after the API code downloads.
//   var player;
//   let YT;
//   window.onYouTubeIframeAPIReady = () => {
//     player = new YT.Player('player', {
//       height: '390',
//       width: '640',
//       videoId: 'M7lc1UVf-VE',
//       events: {
//         'onReady': onPlayerReady,
//         'onStateChange': onPlayerStateChange
//       }
//     });
//   }

//   // 4. The API will call this function when the video player is ready.
//   function onPlayerReady(event) {
//     event.target.playVideo();
//   }

//   // 5. The API calls this function when the player's state changes.
//   //    The function indicates that when playing a video (state=1),
//   //    the player should play for six seconds and then stop.
//   var done = false;
//   function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//       setTimeout(stopVideo, 6000);
//       done = true;
//     }
//   }
//   function stopVideo() {
//     player.stopVideo();
//   }

// });

// });


  return (
    <>

        <div id="player">
      
        </div>
    </>
  );

}

export default Video;
