import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

const title = 'Home';

function action() {
  return {
    chunks: ['home'],
    title,
    component: (
      <Layout>
        <Home title = 'Home'/>
      </Layout>
    ),
  };
}

export default action;
