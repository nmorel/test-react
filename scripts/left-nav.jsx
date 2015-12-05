import React from 'react';
import articleIdGenerator from 'article-id-generator';

/**
 * Generates the links corresponding to the articles.
 * @param articles The articles
 * @param prefixId The prefix to append to article's id
 * @returns {object} the generated element
 */
function generateArticleLinks(articles, prefixId) {
  const links = articles.map((article, index) => generateArticleLink(article, index, prefixId));
  return <ul>{links}</ul>;
}

/**
 * Generates the link corresponding to the article.
 * @param article The article
 * @param index The index
 * @param prefixId The prefix to append to article's id
 * @returns {object} the generated element or undefined if the element is not an article.
 */
function generateArticleLink(article, index, prefixId) {
  if (article.type && article.type !== 'article') {
    // it's not an article but a paragraph or figure
    return;
  }

  const id = articleIdGenerator(index, prefixId);
  const anchor = <a href={'#' + id}>{article.title}</a>;

  // We also need to generate the links for sub articles
  // We do not call generateArticleLinks because some of the elements can be a paragraph or figure and we need to iterate over all to get the same id
  let subLinks = [];
  for (let i = 0; i < article.elements.length; i++) {
    const subLink = generateArticleLink(article.elements[i], i, id);
    if (subLink) {
      subLinks.push(subLink);
    }
  }

  if (subLinks.length > 0) {
    return (
      <li key={id}>
        {anchor}
        <ul>
          {subLinks}
        </ul>
      </li>
    );
  } else {
    return (
      <li key={id}>
        {anchor}
      </li>
    );
  }
}

/**
 * Represents a menu on left side to navigate between articles in a section.
 */
export default React.createClass({
  propTypes: {
    // Section data
    section: React.PropTypes.shape({
      articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    }).isRequired
  },
  getInitialState: function() {
    return {
      top: 0
    };
  },
  componentDidMount: function() {
    this.updateLeftMenuTop();
    document.addEventListener("scroll", this.updateLeftMenuTop);
  },
  componentWillUnmount: function() {
    document.removeEventListener("scroll", this.updateLeftMenuTop);
  },
  render: function() {
    const links = generateArticleLinks(this.props.section.articles);
    return <nav id='left-nav' style={this.state}>{links}</nav>;
  },
  updateLeftMenuTop: function() {
    // we could probably do cleaner
    // by referencing the header element in main.jsx and pass it down the children for exemple
    // or have the header broadcast some event to tell its height or put it in a store like redux
    const header = document.getElementById("header");
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const top = Math.max(0, header.offsetHeight - scrollTop);
    if (top !== this.state.top) {
      this.setState({
        top: top
      });
    }
  }
})
