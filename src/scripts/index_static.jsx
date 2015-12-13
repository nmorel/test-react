import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'layout/App.jsx';

/**
 * Represents the application's complete page used for static generation
 */
class Root extends React.Component {
  static propTypes = {
    scripts: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    stylesheets: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    appHtml: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <html lang="fr">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>Test d'intégration</title>

        <link rel="shortcut icon" href={require('../images/favicon.ico')}/>

        <meta name="keywords" content="1000volts, lorem, ipsum"/>
        <meta name="description" content="Lorem ipsum dolor sit amet"/>
        <meta name="geo.placename" content="Le Rheu, Bretagne, France"/>
        <meta name="twitter:site" content="@1000_Volts"/>

        {this.props.stylesheets.map(stylesheet => <link rel="stylesheet" href={stylesheet}/>)}
      </head>

      <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: this.props.appHtml }}></div>
      {this.props.scripts.map(script => <script src={script}></script>)}
      </body>
      </html>
    );
  }
}

module.exports = function render(locals, callback) {
  const props = {
    scripts: [
      locals.assets.web,
    ],
    stylesheets: [],
  };
  Object.keys(locals.webpackStats.compilation.assets).forEach(asset => {
    if (/\.css$/.test(asset)) {
      props.stylesheets.push(asset);
    }
  });

  // Application element that will be overriden on client
  props.appHtml = ReactDOMServer.renderToString(React.createElement(App));

  const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Root, props));
  callback(null, '<!DOCTYPE html>' + html);
};
