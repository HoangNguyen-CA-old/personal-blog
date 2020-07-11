import React, { Component } from 'react';
import { connect } from 'react-redux';

import FocusedPost from '../../components/FocusedPost/FocusedPost';

import styles from './FullPost.module.scss';

class FullPost extends Component {
  state = {
    markDown: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.focusedPost) {
      return {
        markDown: nextProps.focusedPost.markDown,
      };
    }
    return;
  }

  render() {
    return (
      <>
        <FocusedPost focusedPost={this.props.focusedPost} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  focusedPost: state.posts.focusedPost,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
