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
        console.log('Error finding web3.'); // when fails
      });
  }

  instantiateContract() {
    this.state.web3.eth
      .getAccounts()
      .then(accounts => {
        if (accounts[0])
          this.setState({
            storageValue: accounts[0],
          });
        else
          this.setState({
            storageValue:
              'Your MetaMask is locked. Simply open MetaMask and unlock it.',
          });
      })
      .catch(() => {
        this.setState({
          storageValue:
            'Can not detect MetaMask Address. Please install MetaMask extension',
        });
      });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <form method="post" action="/register">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="metamask">
                MetaMask Address:
                <p> {this.state.storageValue} </p>
                <input
                  className={s.input}
                  id="metamask"
                  type="hidden"
                  value={null || this.state.storageValue}
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="username">
                Username:
                <input className={s.input} id="username" type="text" />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="email">
                Email:
                <input className={s.input} id="email" type="email" />
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
