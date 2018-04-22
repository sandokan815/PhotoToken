import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SinglePhoto.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import dan_wyn_hitchcock from '../assets/dan-wyn-hitchcock-375.jpeg';

class SinglePhoto extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            Photograph details
          </div>
          <Row className={s.row}>
            <Col md={6}>
              <div className={s.content}>
                <div>Subject: Alfred Hitchcock</div>
                <div>Photographer: Dan Wynn</div>
              </div>
              <div className={s.content}>
                <div>Hitchcock was photographed by Dan Wynn for a commercial.</div>
              </div>
              <div className={s.content}>
                <div>About Dan Wynn</div>
              </div>
              <div className={s.content}>
                <div>
                  Dan Wynn photographed many major figures of the era, from Alfred Hitchcock and Salvador Dali to Bob Dylan and Al Pacino at the start of their careers. His body of work serves as a time capsule of the period from the 1950's and post WWII optimism to the late 1960's when every aspect of life was changed by the Vietnam War and the Women's Liberation and Civil Right Movements. Dan Wynn was a prolific photographer for 45 years, starting in 1947. He was contemporary of Richard Alvedon and Irving Penn and became well known for his food photography, and his stunning fashion and beauty work, portraits of celebrities and cultural icons and innovative advertising photography have been largely overlooked.
                </div>
              </div>
              <div className={s.content}>
                <div>Own the total rights to his photograph</div>
              </div>
            </Col>
            <Col md={6}>
              <div className={s.photoPosition}>
                <img src={dan_wyn_hitchcock}/>
              </div>
              <div className={s.buttonPosition}>
                <a><button className={s.button}>Bid Now</button></a>
              </div>
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(SinglePhoto);
