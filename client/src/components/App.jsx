import React, { useState } from 'react';
import { useEffect } from 'react';
import Search from './Search';

import VideoPage from './VideoPage';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

import { ListProvider } from '../custom-hooks/ListProvider';
import { NoteProvider } from '../custom-hooks/NoteProvider';


const App = () => {

  return (
    <>
    <NoteProvider>
    <ListProvider>


    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/search' exact component={Search}></Route>
        <Route path='/videopage' exact component={VideoPage}></Route>
      </Switch>
    </Router>
    

    </ListProvider>
    </NoteProvider>
    </>
  );
}

export default App;
