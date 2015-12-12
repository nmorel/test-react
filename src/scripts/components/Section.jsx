import React from 'react';
import Article from 'Article.jsx';
import articleIdGenerator from '../services/article-id-generator';

/**
 * Represents a section composed of a title and a list of articles.
 */
class Section extends React.Component {
  render() {
    const articles = this.props.section.articles.map((article, index) => {
      const key = articleIdGenerator(index);
      return <Article key={key} index={key} level={1} article={article}/>;
    });
    return (
      <section>
        <h1>{this.props.section.title}</h1>
        {articles}
      </section>
    );
  }
}

Section.propTypes = {
  // Section data
  section: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }).isRequired,
};

export default Section;
