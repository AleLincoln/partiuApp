import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import MyMap from './pages/MapPage'
import NewPlace from './pages/NewPlace';


import { BrowserRouter, Switch , Route } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path='/' exact>
           <Home />

          </Route>
          <Route path='/map'>
           <MyMap />

          </Route>
          <Route path='/newplace'>
           <NewPlace />

          </Route>

      </Switch>
    
    
    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
