import React from 'react';
import ViewWithLeftMenu from '../layout/ViewWithLeftMenu.jsx';
import data from '../../data/home';

/**
 * Home page
 */
class Home extends React.Component {
  render() {
    return <ViewWithLeftMenu data={data}/>;
  }
}

export default Home;
