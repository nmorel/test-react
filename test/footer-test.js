jest.dontMock('../src/scripts/layout/footer.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Footer = require('../src/scripts/layout/footer.jsx').default;

describe('Footer', () => {

  it('should show the text and links', () => {

    // Render a footer in the document
    let footer = TestUtils.renderIntoDocument(
      <Footer />
    );

    let spans = TestUtils.scryRenderedDOMComponentsWithTag(footer, 'span');
    expect(spans.length).toEqual(2);
    expect(spans[0].textContent).toEqual('Test pour intégration HTML/CSS/Javascript');
    expect(spans[1].textContent).toEqual('Mentions légales — 1000 Volts');

    let links = TestUtils.scryRenderedDOMComponentsWithTag(footer, 'a');
    expect(links.length).toEqual(2);

    expect(links[0].textContent).toEqual('Mentions légales');
    expect(links[0].getAttribute('href')).toEqual('#');
    expect(links[0].getAttribute('target')).toBeNull();

    expect(links[1].textContent).toEqual('1000 Volts');
    expect(links[1].getAttribute('href')).toEqual('http://www.1000volts.fr/');
    expect(links[1].getAttribute('target')).toEqual('_blank');
  });

});
