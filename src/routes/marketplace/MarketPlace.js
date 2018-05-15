import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MarketPlace.css';
import MarketPlaceCard from './MarketPlaceCard/MarketPlaceCard';
import metaData from './DumyData';

class MarketPlace extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>Marketplace</div>
          <div className={s.marketBody}>
            {metaData.map(item => <MarketPlaceCard {...item} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(MarketPlace);
