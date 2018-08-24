import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

export default ({ routes }) =>
  ReactDOM.hydrate(
    <App
      routes={routes}
      data={window.__initialData}
      path={window.location.pathname}
    />,
    document.getElementById('root')
  );

export const Link = ({ href, children }) =>
  React.cloneElement(React.Children.only(children), {
    href,
    onClick(e) {
      e.preventDefault();

      window.history.pushState({}, '', href);

      window.dispatchEvent(
        new CustomEvent('navigate', { detail: { path: href } })
      );
    },
  });
