
  useEffect(() => {

    // https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution
    // check if api is loaded
    if (!window.YT) { // if not, load
      // 2. This code loads the IFrame Player API code asynchronously.
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo;

      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    } else {
      loadVideo();
    }
    


  });

  

  const loadVideo = (idFromState) => {

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let player;
    const onYouTubeIframeAPIReady = () => {
      // will replace div with id 'player' with an iframe
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: idFromState,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        },
        playerVars: {rel: 0}
      });
    }
  }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
