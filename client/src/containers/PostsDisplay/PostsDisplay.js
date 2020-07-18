import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PostDisplay.module.scss';

import Posts from '../../components/Posts/Posts';
import Hero from '../../components/Hero/Hero';
import Spinner from '../../components/UI/Spinner/Spinner';

import { getPosts } from '../../store/actions/postsActions';
import { setFocusedPost } from '../../store/actions/postActions';
export class PostsDisplay extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  handleSetFocused = (post) => {
    this.props.setFocusedPost(post);
    this.props.history.push('/article');
  };
  render() {
    let content = (
      <div className={styles.PostsDisplay}>
        <p className={styles.TextDisplay}>
          Couldn't fetch articles from server
        </p>
      </div>
    );
    if (this.props.loading) {
      content = (
        <div className={styles.PostsDisplay}>
          <Spinner />
        </div>
      );
    }

    if (this.props.posts.length !== 0) {
      content = (
        <div className={styles.PostsDisplay}>
          <Hero
            post={this.props.posts[0]}
            subheader='Featured Article'
            clicked={() => this.handleSetFocused(this.props.posts[0])}
          ></Hero>
          <Posts
            posts={this.props.posts}
            setFocused={this.handleSetFocused}
          ></Posts>
        </div>
      );
    }
    return <>{content}</>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
});

const mapDispatchToProps = {
  getPosts: () => getPosts(),
  setFocusedPost: (post) => setFocusedPost(post),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsDisplay);
