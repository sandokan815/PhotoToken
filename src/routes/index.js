const routes = {
  path: '',

  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/auction',
      load: () => import(/* webpackChunkName: 'auction' */ './auction'),
    },
    {
      path: '/marketplace',
      load: () => import(/* webpackChunkName: 'marketplace' */ './marketplace'),
    },
    {
      path: '/faq',
      load: () => import(/* webpackChunkName: 'faq' */ './faq'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/singlephoto',
      load: () => import(/* webpackChunkName: 'singlephoto' */ './singlephoto'),
    },
  ],

  async action({ next }) {
    const route = await next();

    route.title = `${route.title || 'Untitled Page'} - photo-token.com`;
    route.description = route.description || '';

    return route;
  },
};

export default routes;
