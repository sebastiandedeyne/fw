import Index from './views/Home/Index';
import HomeController from './controllers/HomeController';

export default [
  { path: '/', action: [HomeController, 'index'], view: Index },
];
