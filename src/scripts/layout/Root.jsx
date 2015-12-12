require('../../styles/main.scss');

import React from 'react';

import Header from 'Header.jsx';
import Home from '../views/Home.jsx';
import Footer from 'Footer.jsx';

/**
 * Represents the application's layout
 */
class Root extends React.Component {
  render() {
    return (
      <html lang="fr">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>Test d'intégration</title>

        <link rel="shortcut icon" href={require('../../images/favicon.ico')}/>

        <meta name="keywords" content="1000volts, lorem, ipsum"/>
        <meta name="description" content="Lorem ipsum dolor sit amet"/>
        <meta name="geo.placename" content="Le Rheu, Bretagne, France"/>
        <meta name="twitter:site" content="@1000_Volts"/>

        <link rel="stylesheet" href="styles/main.css"/>
      </head>

      <body>
      <Header/>
      <Home/>
      <Footer/>
      <script src="scripts/bundle.js"></script>
      </body>
      </html>
    );
  }
}

export default Root;
