import React from 'react';

/**
 * Represents a button used to toggle navigation
 */
class NavToggle extends React.Component {
  static propTypes = {
    onToggleNav: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <button id="header-nav-toggle" type="button" onClick={this.props.onToggleNav}>
        <span className={'icon-bar'}/>
        <span className={'icon-bar'}/>
        <span className={'icon-bar'}/>
      </button>
    );
  }
}

export default NavToggle;
