import React, { Component } from 'react';
import { connect } from 'react-redux';

import Posts from '../../components/Posts/Posts';

import { getPosts } from '../../store/actions/postActions';
export class PostsDisplay extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
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

const mapDispatchToProps = {
  getPosts: () => getPosts(),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsDisplay);
