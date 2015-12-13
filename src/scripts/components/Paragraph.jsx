import React from 'react';

/**
 * Reprensents a paragraph in an article
 */
class Paragraph extends React.Component {
  static propTypes = {
    paragraph: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return <p dangerouslySetInnerHTML={{ __html: this.props.paragraph.text }}/>;
  }
}

export default Paragraph;
