export default class Router {
  constructor(routes) {
    this.routes = routes;
  }

  resolve(path) {
    return this.routes.find(route => route.path === path) || {};
  }
}
