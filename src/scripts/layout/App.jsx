require('../../styles/main.scss');

import React from 'react';

import Header from 'Header.jsx';
import Footer from 'Footer.jsx';

/**
 * Represents the application's layout
 */
class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
