import React from 'react';

const nbBars = 3;

let bars = [];
for (let i = 0; i < nbBars; i++) {
  bars.push(<span key={'icon-bar-'+i} className={'icon-bar'}/>);
}

/**
 * Represents a button used to toggle navigation
 */
export default React.createClass({
  propTypes: {
    onToggleNav: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <button id='header-nav-toggle' type='button' onClick={this.props.onToggleNav}>{bars}</button>
    );
  }
})
