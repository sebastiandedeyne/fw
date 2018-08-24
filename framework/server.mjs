import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

const render = (view, data) => `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <div id="root">${ReactDOMServer.renderToString(
        React.createElement(view, data)
      )}</div>
    </body>
  </html>
`;

export default ({ routes }) => {
  const app = express();

  // Temporary dummy test
  const route = routes[0];

  app.get(route.path, (req, res) =>{
    const [controllerClass, actionName] = route.action;
    const controller = new controllerClass();
    const data = controller[actionName](req);

    if (req.header('Accept') === 'application/json') {
      res.send(JSON.stringify(data));
    } else {
      res.send(render(route.view, data));
    }
  });

  return {
    start: () => app.listen(8080),
  };
};
