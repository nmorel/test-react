import React from 'react';
import { Route } from 'react-router';
import App from './layout/App.jsx';
import Home from './views/Home.jsx';
import Page1 from './views/Page1.jsx';
import Page2 from './views/Page2.jsx';
import Contact from './views/Contact.jsx';

export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="/page1" component={Page1}/>
    <Route path="/page2" component={Page2}/>
    <Route path="/contact" component={Contact}/>
  </Route>
);
