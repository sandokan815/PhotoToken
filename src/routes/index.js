
// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/auction',
      load: () => import(/* webpackChunkName: 'auction' */ './auction'),
    },
    // {
    //   path: '/marketplace',
    //   load: () => import(/* webpackChunkName: 'login' */ './marketplace'),
    // },
    // {
    //   path: '/faq',
    //   load: () => import(/* webpackChunkName: 'register' */ './faq'),
    // },
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
    // {
    //   path: '/privacy_policy',
    //   load: () => import(/* webpackChunkName: 'admin' */ './privacy_policy'),
    // }
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - photo-token.com`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is avaliable by permanent url for development mode
// if (__DEV__) {
//   routes.children.unshift({
//     path: '/error',
//     action: require('./error').default,
//   });
// }

export default routes;
