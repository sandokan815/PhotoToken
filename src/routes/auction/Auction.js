import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Auction.css';

import firstPhoto from '../assets/dan-wynn_bill-gates-time_magazine-188.jpg';
import secondPhoto from '../assets/danwynn-dustinhoffman-190.jpeg';
import thirdPhoto from '../assets/dan-wyn-hitchcock-229.jpeg';
import fourthPhoto from '../assets/dan-wynn_dolly-parton-158.jpg';
import fitfhPhoto from '../assets/danwynn-chevychase-240.jpeg';
import sixthPhoto from '../assets/dan_wynn_leonard_nimoy_mr_spark-193.jpg';
import seventhPhoto from '../assets/dan_wynn_carol_burnett-217.jpg';
import eighthPhoto from '../assets/dan_wynn_steinem_hughes-240.jpg';
import ninthPhoto from '../assets/danwynn-al-pacino-191.jpeg';
import tenthPhoto from '../assets/arthur_horpo_marx-groucho_marx-brother-238.jpeg';

class Auction extends React.Component {
  render() { 
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            Current photographs available
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={firstPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Bill Gates</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Bill Gates was photographed for an editorial in Seattle, Washington USA
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={secondPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Dustin Hoffman</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={thirdPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Alfred Hitchcock</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={fourthPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Dolly Parton</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={fitfhPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Chevy Chase</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={sixthPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Leonard Limoy</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={seventhPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Carol Burnett</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={eighthPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Steinem Hughes</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={ninthPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Al Pacino</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>

          <div className={s.photographs}>
            <div className={s.photoPosition}>
              <img className={s.photo} src={tenthPhoto}/>
            </div>
            <div className={s.content}>
              <div className={s.type}>
                Subject: <span className={s.name}>Groucho Marx</span>
              </div>
              <div className={s.type}>
                Photographer: <span className={s.name}>Dan Wynn</span>
              </div>
              <div className={s.comment}>
                Description text
              </div>
              <div className={s.comment}>
                Price: 50 ETH
              </div>
              <div>
                <a> <button className={s.button}>Bid Now</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Auction);
