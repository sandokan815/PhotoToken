import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import contact from './contact.md';

function action() {
  return {
    chunks: ['contact'],
    title: contact.title,
    component: (
      <Layout>
        <Page {...contact} />
      </Layout>
    ),
  };
}

export default action;
