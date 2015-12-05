import React from 'react';
import LeftNav from '../components/left-nav.jsx';
import Section from '../components/section.jsx';

/**
 * Represents a view with a left menu and a section
 */
export default React.createClass({
  propTypes: {
    // Data
    data: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    }).isRequired
  },
  render: function() {
    return (
      <div className={'main'} role='main'>
        <LeftNav section={this.props.data}/>
        <Section section={this.props.data}/>
      </div>
    );
  }
})
