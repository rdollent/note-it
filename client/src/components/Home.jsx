import React, { useState } from 'react';
import { useEffect } from 'react';
// import { useHistory } from 'react-router';
import { useHistory } from 'react-router-dom';

// https://stackoverflow.com/questions/43279135/reactjs-router-v4-history-push-not-working
import { withRouter } from 'react-router';

const Home = () => {
    let history = useHistory();

    const ClickSearch = () => {
        
        // e.preventDefault();
        history.push('/search');
    }

    return (
        <div className='App'>
            <button onClick={ClickSearch} history={history}>Search</button>
        </div>
      );
}

export default withRouter(Home);