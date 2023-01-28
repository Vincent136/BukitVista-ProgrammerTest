import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: 'githubSearch',
    component: asyncComponent(() => import('./containers/GithubSearch'))
  },
  {
    path: 'guest_detail',
    component: asyncComponent(() => import('./containers/guestDetails'))
  }
];

export default routes;