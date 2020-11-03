import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useNote, useChangeNote } from '../custom-hooks/NoteProvider';

import Quill from 'quill';

// https://quilljs.com/


import Video from './Video';
import TextEditor from './TextEditor';
// put them both in this container. why? youtube api reloads when component re-renders because of state change
// using local state or React Context API

const VideoPage = React.memo(({title}) => {
    let history = useHistory();
    const note = useNote();
    let videoId = note.videoId;

    let [state, setState] = useState(0);

    // window.YT = undefined;
    // window.onYouTubeIframeAPIReady = undefined;
    // window.onYTReady = undefined;

//     if (!window['YT']) {var YT = {loading: 0,loaded: 0};}
// if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}
// if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} 
// else 
// {l.push(f);}};
// window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};
// YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};
// var a = document.createElement('script');
// a.type = 'text/javascript';
// a.id = 'www-widgetapi-script';
// a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vflumC9r0/www-widgetapi.js';
// a.async = true;
// var b = document.getElementsByTagName('script')[0];
// b.parentNode.insertBefore(a, b);})();}



    let localState = {};

    // const Video = React.memo(({nothing}) => {
    //     // console.log('props inside Video', props);
    //     // if(window.YT) {;
    //     //     delete window.YT;
    //     //     delete window.onYouTubeIframeAPIReady;
    //     //     delete window.onYTReady;
    //     // }
    //     // https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution

    //     if(document.getElementById('YT-script')) {
    //         document.getElementById('YT-script').remove();
    //     } 

    //     if(!window.YT) {
    //         const tag = document.createElement('script');
    //         tag.id = 'YT-script';
    //         tag.async = true;
    //         tag.crossorigin = '';
    //         tag.src = 'https://www.youtube.com/iframe_api';
    //         let firstScriptTag = document.getElementsByTagName('script')[0];
    //         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //         document.body.appendChild(tag);
    //     }
    
    //     // 3. This function creates an <iframe> (and YouTube player)
    //     //    after the API code downloads.
    //     window.onYouTubeIframeAPIReady = () => {

    //         // 4. The API will call this function when the video player is ready.
    //         const onPlayerReady = (event) => {
    //             // event.target.mute();
    //             // event.target.playVideo();
    //         }
    //         // 5. The API calls this function when the player's state changes.
    //         const onPlayerStateChange = (event) => {
    //             switch (event.data) {
    //                 case window.YT.PlayerState.PLAYING:
    //                 break;
    //                 case window.YT.PlayerState.PAUSED:
    //                 // in seconds
    //                 let currentTime = player.getCurrentTime();
    //                 localState.playerCurrentTime = currentTime;
    //                 setState(currentTime);
    //                 break;
    //             }
    //         }

    //         // the Player object is created uniquely based on the id in props
    //         const player = new window.YT.Player('player', {
    //             host: 'https://www.youtube.com',
    //             height: '390',
    //             width: '640',
    //             videoId: videoId,
    //             events: {
    //             'onReady': onPlayerReady,
    //             'onStateChange': onPlayerStateChange
    //             },
    //             playerVars: {rel: 0}
    //         });
    //     };
        
    //     // const goBack = () => {
    //     //     history.push('/search');
    //     // }

    //     return (
    //         <div id='video'>
    //             <div id="player">
    //             </div>
    //             {/* <button onClick={goBack}>Back</button> */}
    //         </div>
    //     );

    // })



    // const VideoMemo = React.memo(Video);



    
    









    const goBack = () => {
        history.push('/search');
      }


    return (
        <div>
            <Video changeState={setState}/>
            <button onClick={goBack}>Back</button>
            <TextEditor currentTime={state}/>
        </div>
    )
});

export default VideoPage;