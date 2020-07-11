import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import Hero from '../../components/Hero/Hero';

import styles from './FullPost.module.scss';

class FullPost extends Component {
  render() {
    let content = <Redirect to='/'></Redirect>;
    if (this.props.focusedPost !== null) {
      content = (
        <>
          <Hero post={this.props.focusedPost}></Hero>
          <div className={styles.MarkDownContainer}>
            <ReactMarkdown
              source={this.props.focusedPost.markDown}
            ></ReactMarkdown>
          </div>
        </>
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
