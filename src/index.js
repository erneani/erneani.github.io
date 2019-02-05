import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

document.querySelector('body').style.margin=0;
document.querySelector('body').style.background="url('./images/triangles.png')";

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={ true } component={ App }/>
    </Switch>
  </BrowserRouter>
  ), root);
