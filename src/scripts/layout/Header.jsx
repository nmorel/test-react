import React from 'react';
import NavToggle from '../components/NavToggle.jsx';

// TODO Replace with ReactRouter

/**
 * Represents the application"s header
 */
class Header extends React.Component {

  state = {
    navOpened: false,
  };

  _toggleNav = () => {
    this.setState({
      navOpened: !this.state.navOpened,
    });
  };

  render() {
    const navBarClasses = this.state.navOpened ? 'opened' : '';

    return (
      <header id="header">
        <NavToggle onToggleNav={this._toggleNav}/>
        <nav id="header-nav" className={navBarClasses}>
          <ul>
            <li>
              <a href="#" className={'active'}>Accueil</a>
            </li>
            <li>
              <a href="#">Menu 1</a>
            </li>
            <li>
              <a href="#">Autre page</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h2>Ma page d'accueil</h2>
      </header>
    );
  }
}

export default Header;
