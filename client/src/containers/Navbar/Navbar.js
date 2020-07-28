import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavLinks from '../../components/NavLinks/NavLinks';

import styles from './Navbar.module.scss';

import { logout } from '../../store/actions/authActions';
export class Navbar extends Component {
  handleGotoPosts = () => {
    this.props.history.push('/');
  };
  handleGotoLogin = () => {
    this.props.history.push('/login');
  };

  handleGotoAdmin = () => {
    this.props.history.push('/admin');
  };
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div className={styles.Navbar}>
        <h1 className={styles.Logo}>The Blog</h1>
        <NavLinks
          gotoPosts={this.handleGotoPosts}
          gotoAdmin={this.handleGotoAdmin}
          gotoLogin={this.handleGotoLogin}
          logout={this.handleLogout}
          isAuthenticated={this.props.isAuthenticated}
        ></NavLinks>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  logout: () => logout(),
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
