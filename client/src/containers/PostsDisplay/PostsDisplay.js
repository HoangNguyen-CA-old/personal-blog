import React, { Component } from 'react';
import { connect } from 'react-redux';

import Posts from '../../components/Posts/Posts';

export class PostsDisplay extends Component {
  render() {
    return (
      <>
        <Posts posts={this.props.posts}></Posts>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostsDisplay);
