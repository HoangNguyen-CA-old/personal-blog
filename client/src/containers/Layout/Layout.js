import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Layout.module.scss';

import Navbar from '../Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export class Layout extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className={styles.Container}>{this.props.children}</div>
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
