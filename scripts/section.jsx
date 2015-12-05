import React from 'react';
import Article from 'article.jsx';
import articleIdGenerator from 'article-id-generator';

/**
 * Represents a section composed of a title and a list of articles.
 */
export default React.createClass({
  propTypes: {
    // Section data
    section: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    }).isRequired
  },
  render: function() {
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
})
