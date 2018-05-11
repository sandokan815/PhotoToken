import React from 'react';
import { Nav, NavDropdown, MenuItem, NavItem, Navbar } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import s from './Navigation.css';

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
  handleToggle = () => {};

  render() {
    return (
      <div className={s.root} role="navigation">
        <Navbar className={s.menuBar}>
          <Nav>
            <NavDropdown
              title="Auction"
              id="basic-nav-dropDown"
              onMouseEnter={this.handleOpen}
              onMouseLeave={this.handleClose}
              open={this.state.isOpen}
              onToggle={this.handleToggle}
              noCaret
            >
              <MenuItem href="/auction">Auction</MenuItem>
              <MenuItem href="/singlePhoto">Single-photo</MenuItem>
            </NavDropdown>
            <NavItem className={s.link} href="/marketplace">
              Marketplace
            </NavItem>
            <NavItem className={s.link} href="/faq">
              FAQ
            </NavItem>
            <NavItem className={s.about} href="/about">
              About
            </NavItem>
            <NavItem className={s.link} href="/login">
              Login
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withStyles(bootstrap, s)(Navigation);
