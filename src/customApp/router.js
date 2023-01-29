import asyncComponent from '../helpers/AsyncFunc';

const routes = [
 // add routes guest details
  {
    path: 'guest_detail',
    component: asyncComponent(() => import('./containers/guestDetails'))
  }, 
  {
    path: 'test_api',
    component: asyncComponent(() => import('./containers/testApi'))
  }
];

export default routes;