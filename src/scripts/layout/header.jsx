import React from 'react';
import NavToggle from '../components/nav-toggle.jsx';

// TODO Replace with ReactRouter

/**
 * Represents the application's header
 */
export default React.createClass({
  getInitialState: function() {
    return {
      navOpened: false
    };
  },
  render: function() {
    const navBarClasses = this.state.navOpened ? 'opened' : '';

    return (
      <header id='header'>
        <NavToggle onToggleNav={this.toggleNav}/>
        <nav id='header-nav' className={navBarClasses}>
          <ul>
            <li>
              <a href='#' className={'active'}>Accueil</a>
            </li>
            <li>
              <a href='#'>Menu 1</a>
            </li>
            <li>
              <a href='#'>Autre page</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <h2>Ma page d'accueil</h2>
      </header>
    );
  },
  toggleNav: function() {
    this.setState({
      navOpened: !this.state.navOpened
    });
  }
})
