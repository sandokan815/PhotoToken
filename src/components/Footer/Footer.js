import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.link} to="/contact">
            Contact us
          </Link>
          <Link className={s.link} to="/privacy">
            Privacy Policy
          </Link>
          <Link className={s.link} to="/about">
            About
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
