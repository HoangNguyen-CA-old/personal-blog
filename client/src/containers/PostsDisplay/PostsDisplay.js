import React, { Component } from 'react';
import { connect } from 'react-redux';

import Posts from '../../components/Posts/Posts';

import { getPosts, setFocusedPost } from '../../store/actions/postActions';
export class PostsDisplay extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  handleSetFocused = (post) => {
    this.props.setFocusedPost(post);
    this.props.history.push('/article');
  };
  render() {
    return (
      <>
        <Posts
          posts={this.props.posts}
          setFocused={this.handleSetFocused}
        ></Posts>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = {
  getPosts: () => getPosts(),
  setFocusedPost: (post) => setFocusedPost(post),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsDisplay);
