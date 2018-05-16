import React from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MarketPlaceCard.css';

class MarketPlaceCardContainer extends React.Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    photographer: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  render() {
    return (
      <div className={s.marketPlatContainer}>
        <div className={s.photoPosition}>
          <img src={this.props.imageUrl} alt="temp" />
        </div>
        <div className={s.content}>
          <div>Seller: {this.props.seller}</div>
          <div>Subject: {this.props.subject}</div>
          <div>Photographer: {this.props.photographer}</div>
          <div>Minimum bid: {this.props.price} ETH</div>
          <div>
            {/* <a>
                    <button className={s.button}>Place Bid</button>
                  </a> */}
            <button className={s.button}>Place Bid</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(MarketPlaceCardContainer);
