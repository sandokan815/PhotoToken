import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MarketPlace.css';
import placeholder from '../assets/placeholder.png';

class MarketPlace extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>Marketplace</div>
          <Row className={s.row}>
            <Col md={4}>
              <div className={s.photoPosition}>
                <img src={placeholder} alt="temp" />
              </div>
              <div className={s.content}>
                <div>Seller: Hossein123</div>
                <div>Subject: Alfred Hitchcock</div>
                <div>Photographer: Dan Wynn</div>
                <div>Minimum bid: 100ETH</div>
                <div>
                  {/* <a>
                    <button className={s.button}>Place Bid</button>
                  </a> */}
                  <button className={s.button}>Place Bid</button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className={s.photoPosition}>
                <img src={placeholder} alt="temp" />
              </div>
              <div className={s.content}>
                <div>Seller: Hossein123</div>
                <div>Subject: Alfred Hitchcock</div>
                <div>Photographer: Dan Wynn</div>
                <div>Minimum bid: 100ETH</div>
                <div>
                  {/* <a>
                    <button className={s.button}>Place Bid</button>
                  </a> */}
                  <button className={s.button}>Place Bid</button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className={s.photoPosition}>
                <img src={placeholder} alt="temp" />
              </div>
              <div className={s.content}>
                <div>Seller: Hossein123</div>
                <div>Subject: Alfred Hitchcock</div>
                <div>Photographer: Dan Wynn</div>
                <div>Minimum bid: 100ETH</div>
                <div>
                  {/* <a>
                    <button className={s.button}>Place Bid</button>
                  </a> */}
                  <button className={s.button}>Place Bid</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={s.row}>
            <Col md={4}>
              <div className={s.photoPosition}>
                <img src={placeholder} alt="temp" />
              </div>
              <div className={s.content}>
                <div>Seller: Hossein123</div>
                <div>Subject: Alfred Hitchcock</div>
                <div>Photographer: Dan Wynn</div>
                <div>Minimum bid: 100ETH</div>
                <div>
                  {/* <a>
                    <button className={s.button}>Place Bid</button>
                  </a> */}
                  <button className={s.button}>Place Bid</button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className={s.photoPosition}>
                <img src={placeholder} alt="temp" />
              </div>
              <div className={s.content}>
                <div>Seller: Hossein123</div>
                <div>Subject: Alfred Hitchcock</div>
                <div>Photographer: Dan Wynn</div>
                <div>Minimum bid: 100ETH</div>
                <div>
                  {/* <a>
                    <button className={s.button}>Place Bid</button>
                  </a> */}
                  <button className={s.button}>Place Bid</button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className={s.photoPosition}>
                <img src={placeholder} alt="temp" />
              </div>
              <div className={s.content}>
                <div>Seller: Hossein123</div>
                <div>Subject: Alfred Hitchcock</div>
                <div>Photographer: Dan Wynn</div>
                <div>Minimum bid: 100ETH</div>
                <div>
                  {/* <a>
                    <button className={s.button}>Place Bid</button>
                  </a> */}
                  <button className={s.button}>Place Bid</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(MarketPlace);
