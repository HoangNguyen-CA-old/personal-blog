import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Navbar.module.scss';

export class Navbar extends Component {
  render() {
    return <div className={styles.Navbar}></div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
