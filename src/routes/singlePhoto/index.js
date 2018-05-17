import React from 'react';
import Layout from '../../components/Layout';
import SinglePhoto from './singlePhoto';

const title = 'Single-Photo';

function action() {
  return {
    chunks: ['singlephoto'],
    title,
    component: (
      <Layout>
        <SinglePhoto />
      </Layout>
    ),
  };
}

export default action;
