import React from 'react';
import LeftNav from '../components/LeftNav.jsx';
import Section from '../components/Section.jsx';

/**
 * Represents a view with a left menu and a section
 */
class ViewWithLeftMenu extends React.Component {
  render() {
    return (
      <div className={'main'} role="main">
        <LeftNav section={this.props.data}/>
        <Section section={this.props.data}/>
      </div>
    );
  }
}

ViewWithLeftMenu.propTypes = {
  // Data
  data: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }).isRequired,
};

export default ViewWithLeftMenu;
