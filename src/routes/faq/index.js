import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import faq from './faq.md';

function action() {
  return {
    chunks: ['faq'],
    title: faq.title,
    component: (
      <Layout>
        <Page {...faq} />
      </Layout>
    ),
  };
}

export default action;
