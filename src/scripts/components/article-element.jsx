import React from 'react';
import Article from 'article.jsx';

/**
 * Represents a figure in an article
 */
const Figure = React.createClass({
  propTypes: {
    figure: React.PropTypes.shape({
      filename: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      caption: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function() {
    return (
      <div className={'figure-overlay'}>
        <figure>
          <img src={this.props.figure.url} alt={this.props.figure.filename}/>
          <figcaption>{this.props.figure.caption}</figcaption>
        </figure>
      </div>
    );
  }
});

/**
 * Reprensents a paragraph in an article
 */
const Paragraph = React.createClass({
  propTypes: {
    paragraph: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function() {
    return (
      <p dangerouslySetInnerHTML={{__html: this.props.paragraph.text}}/>
    );
  }
});

/**
 * Represents an element in an article that can be any of [Paragraph, Figure, Article]
 */
export default React.createClass({
  propTypes: {
    index: React.PropTypes.string.isRequired,
    level: React.PropTypes.number.isRequired,
    element: React.PropTypes.shape({
      type: React.PropTypes.oneOf(['paragraph', 'figure', 'article']).isRequired
    }).isRequired
  },
  render: function() {
    switch (this.props.element.type) {
      case 'paragraph':
        return <Paragraph paragraph={this.props.element}/>;
      case 'figure':
        return <Figure figure={this.props.element}/>;
      case 'article':
        return <Article index={this.props.index} level={this.props.level} article={this.props.element}/>;
      default:
        throw `Unknown article element '${this.props.element.type}'. One of ['paragraph', 'figure', 'article'] expected.`;
    }
  }
})
