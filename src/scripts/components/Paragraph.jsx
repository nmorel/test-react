import React from 'react';

/**
 * Reprensents a paragraph in an article
 */
class Paragraph extends React.Component {
  render() {
    return <p dangerouslySetInnerHTML={{__html: this.props.paragraph.text}}/>;
  }
}

Paragraph.propTypes = {
  paragraph: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Paragraph;
