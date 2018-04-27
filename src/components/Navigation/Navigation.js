import React from 'react';
import { Nav, NavDropdown, MenuItem, NavItem, Navbar } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import s from './Navigation.css';
import Link from '../Link';

// import ActiveDropdown from 'react-bootstrap-navdropdown-active';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className={s.root} role="navigation">
        <Navbar className={s.menuBar}>
          <Nav>
            <NavDropdown
              title="Auction"
              id="basic-nav-dropdown"
              onMouseEnter={this.handleOpen}
              onMouseLeave={this.handleClose}
              open={this.state.isOpen}
              noCaret
            >
              <MenuItem>
                <Link className={s.link} to="/auction">
                  Auction
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={s.link} to="/singlePhoto">
                  Single-photo
                </Link>
              </MenuItem>
            </NavDropdown>
            <NavItem className={s.link}>
              <Link className={s.link} to="/marketplace">
                {' '}
                Marketplace{' '}
              </Link>
            </NavItem>
            <NavItem className={s.link}>
              <Link className={s.link} to="/faq">
                {' '}
                FAQ{' '}
              </Link>
            </NavItem>
            <NavItem className={s.about}>
              <Link className={s.link} to="/about">
                {' '}
                About{' '}
              </Link>
            </NavItem>
            <NavItem className={s.link}>
              <Link className={s.link} to="/login">
                {' '}
                Login{' '}
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(Navigation);
