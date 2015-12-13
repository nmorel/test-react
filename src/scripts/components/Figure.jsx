import React from 'react';

/**
 * Represents a figure in an article
 */
class Figure extends React.Component {
  static propTypes = {
    figure: React.PropTypes.shape({
      filename: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      caption: React.PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div className={'figure-overlay'}>
        <figure>
          <img src={this.props.figure.url} alt={this.props.figure.filename}/>
          <figcaption>{this.props.figure.caption}</figcaption>
        </figure>
      </div>
    );
  }
}

export default Figure;
