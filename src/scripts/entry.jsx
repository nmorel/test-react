import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Root from 'layout/Root.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

/*
 Needed for onTouchTap
 Can go away when react 1.0 release
 Check this repo:
 https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin();

if (typeof document === 'undefined') {
  module.exports = function render(locals, callback) {
    const html = ReactDOMServer.renderToString(React.createElement(Root, locals));
    callback(null, '<!DOCTYPE html>' + html);
  };
} else {
  ReactDOM.render(<Root />, document);
}
