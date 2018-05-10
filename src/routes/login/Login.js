import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <form method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="usernameOrEmail">
                Email address:
                <input
                  className={s.input}
                  id="usernameOrEmail"
                  type="text"
                  name="usernameOrEmail"
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
                <input
                  className={s.input}
                  id="password"
                  type="password"
                  name="password"
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
