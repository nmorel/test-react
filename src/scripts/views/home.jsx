import React from 'react';
import View from '../layout/view-with-left-menu.jsx';
import data from '../../data/home';

/**
 * Home page
 */
export default React.createClass({
  render: function() {
    return <View data={data}/>;
  }
})
