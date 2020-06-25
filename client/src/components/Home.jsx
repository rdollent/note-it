import React, { useState } from 'react';
import { useEffect } from 'react';
// import { useHistory } from 'react-router';
import { withRouter, useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();

    const ClickSearch = () => {
        
        // e.preventDefault();
        history.push('/search');
    }

    return (
        <div className='App'>
            <button onClick={ClickSearch}>Search</button>
        </div>
      );
}

export default withRouter(Home);