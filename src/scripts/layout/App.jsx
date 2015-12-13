require('../../styles/main.scss');

import React from 'react';

import Header from 'Header.jsx';
import Home from '../views/Home.jsx';
import Footer from 'Footer.jsx';

/**
 * Represents the application's layout
 */
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
