import React from 'react';

/**
 * Represents the application's footer
 */
export default React.createClass({
  render: function() {
    return (
      <footer>
        <span>Test pour intégration HTML/CSS/Javascript</span>
        <span className={'links'}>
          <a href='#'>Mentions légales</a> — <a href='http://www.1000volts.fr/' target='_blank'>1000 Volts</a>
        </span>
      </footer>
    );
  }
})
