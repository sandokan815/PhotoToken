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
    this.state.web3.eth.getAccounts().then(accounts => {
      this.setState({ storageValue: accounts[0] });
    });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.label}>
            <p>Your MetaMask Address is: {this.state.storageValue}</p>
          </div>
          <form method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="username">
                Username:
                <input
                  className={s.input}
                  id="username"
                  type="text"
                  name="username"
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
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
