import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Layout extends Component {
  render() {
    return <>{this.props.children}</>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
