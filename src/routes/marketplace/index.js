import React from 'react';
import Layout from '../../components/Layout';
import MarketPlace from './MarketPlace';

const title = 'Marketplace';

function action() {
  return {
    chunks: ['marketplace'],
    title,
    component: (
      <Layout>
        <MarketPlace />
      </Layout>
    ),
  };
}

export default action;
