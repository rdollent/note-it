import React, { useState } from 'react';
import { useEffect } from 'react';

// import usePersistedState from '../custom-hooks/state-local-storage';

import { useList, useChangeList } from '../custom-hooks/ListProvider';

import { useNote, useChangeNote } from '../custom-hooks/NoteProvider';


// notes
// https://stackoverflow.com/questions/3700326/decode-amp-back-to-in-javascript

const Search = (props) => {

  // const [idState, setId] = useState('initial state');

  // const [localStorageState, setLocalStorage] = usePersistedState('', 'initial state');

  
  const api_key = 'AIzaSyAPnRBM3LfI4tRDQtiP2iUmgh8O8ngSOug';


  // source https://medium.com/@cmurphy580/a-quick-walkthrough-of-the-youtube-api-javascript-4f0b0a13f988
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${api_key}&type=video&q=`;

  let source = `https://www.youtube.com/embed/`;

  // global state for search results using React Context API
  const list = useList();
  const changeList = useChangeList();

  // global state for note-taking information using React Context API
  const note = useNote();
  // note: note is object type
  const changeNote = useChangeNote();
  

  const getVideo = () => {
      console.log('connected!');


      
      const query = document.getElementById('search').value;
      url+=query;
      fetch(url).then(response => response.json()).then(data => { 
        // setId(data.items);
        console.log(data);
        // https://developers.google.com/youtube/v3/guides/implementation/pagination
        // next page token
        // setLocalStorage(data.items);
        changeList(data.items);
        // source += `${data.items[0].id.videoId}?showinfo=0&rel=0&modestbranding=1&fs=0`;
      });
  }

  useEffect(() => {
    // console.log('this is localstorage ', localStorageState);
    console.log('this is list context ', list);
  });

  const redirect = (e) => {
      let videoId = e.currentTarget.parentNode.getElementsByTagName('iframe')[0].id.substring(4);
      console.log(videoId);
      props.history.push({
        pathname: '/videopage',
        state: {videoId: videoId},
        history: props.history
      });
      changeNote('videoId', videoId);
  }

  const populateVids = () => {
    // if(localStorageState !== 'initial state') {
    if(list !== 'initial state') {
      // return localStorageState.map( (item, ind) => {
      return list.map( (item, ind) => {
        source = `https://www.youtube.com/embed/${item.id.videoId}?showinfo=0&rel=0&modestbranding=1&fs=0&version=3&enablejsapi=1&widgetid=1`;
        // &origin=https://localhost:3000`;

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
