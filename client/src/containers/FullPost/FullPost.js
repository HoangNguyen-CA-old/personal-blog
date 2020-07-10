import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import styles from './FullPost.module.scss';

class FullPost extends Component {
  render() {
    let content = <Redirect to='/'></Redirect>;
    if (this.props.focusedPost !== null) {
      content = (
        <div className={styles.MarkDownContainer}>
          <h1>{this.props.focusedPost.title}</h1>
          <ReactMarkdown
            source={this.props.focusedPost.markDown}
          ></ReactMarkdown>
        </div>
      );
    }
    return <>{content}</>;
  }
}

const mapStateToProps = (state) => ({
  focusedPost: state.posts.focusedPost,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
