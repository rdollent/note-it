import React, { useState } from 'react';
import { useEffect } from 'react';

import usePersistedState from '../custom-hooks/state-local-storage';




// notes
// https://stackoverflow.com/questions/3700326/decode-amp-back-to-in-javascript

const Search = (props) => {

  // const [idState, setId] = useState('initial state');

  const [localStorageState, setLocalStorage] = usePersistedState('', 'initial state');

  
  const api_key = 'AIzaSyAPnRBM3LfI4tRDQtiP2iUmgh8O8ngSOug';


  // source https://medium.com/@cmurphy580/a-quick-walkthrough-of-the-youtube-api-javascript-4f0b0a13f988
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=${api_key}&type=video&q=`;

  let source = `https://www.youtube.com/embed/`;
  

  const getVideo = () => {
      console.log('connected!');
      
      const query = document.getElementById('search').value;
      url+=query;
      fetch(url).then(response => response.json()).then(data => { 
        // setId(data.items);
        setLocalStorage(data.items);
        // source += `${data.items[0].id.videoId}?showinfo=0&rel=0&modestbranding=1&fs=0`;
      });
  }

  useEffect(() => {
    console.log(localStorageState);
  });

  const redirect = (e) => {
      let videoId = e.currentTarget.parentNode.getElementsByTagName('iframe')[0].id.substring(4);
      console.log(videoId);
      props.history.push({
        pathname: '/video',
        state: {videoId: videoId},
        history: props.history
      });
  }

  const populateVids = () => {
    if(localStorageState !== 'initial state') {
      return localStorageState.map( (item, ind) => {
        source = `https://www.youtube.com/embed/${item.id.videoId}?showinfo=0&rel=0&modestbranding=1&fs=0`;


        return (
          React.createElement(
            'div', 
            {className: 'video-boxes', key: `video-${ind}`}, 
            React.createElement(
              'iframe', 
              {id: `vid-${item.id.videoId}`, width: '320', height: '240', allowFullScreen: 'allowFullScreen', src: source},
              ''
            ),
            React.createElement(
              'div',
              {className: 'video-titles'},
              item.snippet.title
            ),
            React.createElement(
              'div',
              {className: 'channel-titles'},
              item.snippet.channelTitle
            ),
            React.createElement(
              'button',
              {className: 'select-video-btn',
              onClick: (e) => redirect(e)},
              'Select'
            )
          
          )
        )
        
        
      });

    } else {
      return ''
    }
  }

  

  


  return (
    <>
        <div className="Search">
            <input type='search' id='search'></input>
            <button onClick={getVideo}>Search</button>
            {populateVids()}
        </div>
    </>
  );
}

export default Search;
