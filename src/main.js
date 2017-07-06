import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>)
  , document.getElementById('root'));
