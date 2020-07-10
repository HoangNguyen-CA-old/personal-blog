import React, { Component } from 'react';
import { connect } from 'react-redux';

import Posts from '../../components/Posts/Posts';

import Hero from '../../components/Hero/Hero';

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
    let content = <p>No articles found</p>;
    if (this.props.posts.length !== 0) {
      content = (
        <>
          <Hero
            post={this.props.posts[0]}
            setFocused={this.handleSetFocused}
          ></Hero>
          <Posts
            posts={this.props.posts}
            setFocused={this.handleSetFocused}
          ></Posts>
        </>
      );
    }
    return <>{content}</>;
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
