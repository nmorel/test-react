require('../styles/main.scss');

import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import Header from 'header.jsx';
import Home from 'home.jsx';
import Footer from 'footer.jsx';

ReactDom.render(<div>
  <Header/>
  <Home/>
  <Footer/>
</div>, document.getElementById('app'));
