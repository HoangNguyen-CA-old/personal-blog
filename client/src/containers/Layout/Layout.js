import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export class Layout extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        {this.props.children}
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
