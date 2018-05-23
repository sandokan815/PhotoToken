import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import getWeb3 from '../../getweb3';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storageValue: '',
      web3: null,
      metaMask: '',
    };
  }

  componentWillMount() {
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3,
        });
        this.instantiateContract();
      })
      .catch(() => {
        console.log('Error finding web3.');
      });
  }

  instantiateContract() {
    this.state.web3.eth
      .getAccounts()
      .then(accounts => {
        if (accounts[0])
          this.setState({
            metaMask: accounts[0],
          });
        else
          this.setState({
            storageValue: 'Your MetaMask is locked. Please Open MetaMask.',
          });
      })
      .catch(() => {
        this.setState({
          storageValue: 'Can not detect MetaMask Extension. Please install it',
        });
      });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <form method="post" action="/login">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="metaMask">
                <h3> {this.state.storageValue} </h3>
                MetaMask Address:
                <input
                  className={s.metaMask}
                  id="metaMask"
                  type="text"
                  value={this.state.metaMask}
                  name="metaMask"
                  required
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="username">
                Username:
                <input
                  className={s.input}
                  id="username"
                  type="text"
                  name="username"
                  required
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="email">
                Email:
                <input
                  className={s.input}
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Save account info
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
