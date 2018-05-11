import React from 'react';
import Layout from '../../components/Layout';
import MyPhoto from './MyPhoto';

const title = 'Marketplace';

function action() {
  return {
    chunks: ['myphoto'],
    title,
    component: (
      <Layout>
        <MyPhoto />
      </Layout>
    ),
  };
}

export default action;
