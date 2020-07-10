import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavLinks from '../../components/NavLinks/NavLinks';

import styles from './Navbar.module.scss';

export class Navbar extends Component {
  handleGotoPosts = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div className={styles.Navbar}>
        <h1 className={styles.Logo}>The Blog</h1>
        <NavLinks gotoPosts={this.handleGotoPosts}></NavLinks>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
