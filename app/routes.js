export default [
  {
    path: '/',
    controller: 'HomeController',
    action: 'index',
    view: require('./views/Page').default,
  },
  {
    path: '/about',
    controller: 'AboutController',
    action: 'index',
    view: require('./views/Page').default,
  },
]
