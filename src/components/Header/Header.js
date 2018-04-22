
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.jpg';
import logoUrl2x from './logo-small@2x.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="200"
              height="74"
              alt="PhotoToken"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
