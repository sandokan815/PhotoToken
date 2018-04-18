import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/Auction">
          Auction
        </Link>
        <Link className={s.link} to="/marketplace">
          Marketplace
        </Link>
        <Link className={s.link} to="/faq">
          FAQ
        </Link>
        <Link className={s.about}  to="/about">
          About
        </Link>
        <Link className={s.link} to="/login">
          Log in
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
