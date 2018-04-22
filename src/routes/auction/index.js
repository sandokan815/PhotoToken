import React from 'react';
import Layout from '../../components/Layout';
import Auction from './Auction';

const title = 'Auction';

function action() {
  return {
  	chunks: ['auction'],
  	title,
    component: (
    	<Layout>
    		<Auction />
    	</Layout>
    ),
  };
}

export default action;
