import React from 'react';
import LeftNav from 'left-nav.jsx';
import Section from 'section.jsx';
import data from '../data/home';

/**
 * Home page
 */
export default React.createClass({
  render: function() {
    return (
      <div className={'main'} role='main'>
        <LeftNav section={data}/>
        <Section section={data}/>
      </div>
    );
  }
})
