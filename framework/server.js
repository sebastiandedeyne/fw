import App from './App';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import Router from './Router';

const render = ({ routes, data, path }) => `
  <!DOCTYPE html>
  <html>
    <head></head>
    <script defer src="/static/client.js"></script>
    <body>
      <div id="root">${ReactDOMServer.renderToString(
          <App
            routes={routes}
            data={data}
            path={path}
          />
      )}</div>
      <script>
        window.__initialData = ${JSON.stringify(data)};
      </script>
    </body>
  </html>
`;

export default ({ routes }) => {
  const app = express();
  const router = new Router(routes);

  const controllers = require.context('../app/controllers', false, /\.js$/);

  app.use('/static', express.static('./dist'));

  app.get('*', (req, res) => {
    const { controller, action } = router.resolve(req.path);

    if (!controller || !action) {
      res.status(404);
      res.send(null);

      return;
    }

    const controllerClass = controllers(`./${controller}.js`).default;

    const data = new controllerClass()[action](req);

    if (req.header('Accept') === 'application/json') {
      res.status(200);
      res.header('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    } else {
      res.status(200);
      res.send(render({
        routes,
        data: data,
        path: req.path,
      }));
    }
  });

  app.listen(8080);
};
