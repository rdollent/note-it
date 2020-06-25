import React, { useState } from 'react';
import { useEffect } from 'react';
import Search from './Search';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';


const App = () => {

  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/search' exact component={Search}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
