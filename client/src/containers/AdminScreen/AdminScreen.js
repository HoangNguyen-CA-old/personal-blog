import React, { Component } from 'react';
import styles from './AdminScreen.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AdminPost from '../../components/AdminPost/AdminPost';
import Spinner from '../../components/UI/Spinner/Spinner';

import { getPosts } from '../../store/actions/postsActions';

export class AdminScreen extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  handleEditPost = (id) => {
    this.props.history.push(`/edit/${id}`);
  };

  render() {
    let content = <Spinner></Spinner>;

    if (!this.props.loading) {
      let adminPosts = this.props.posts.map((post) => {
        return (
          <AdminPost
            key={post._id}
            post={post}
            handleEditPost={() => this.handleEditPost(post._id)}
          ></AdminPost>
        );
      });
      content = (
        <div className={styles.Container}>
          {this.props.isAuthenticated ? null : <Redirect to='/'></Redirect>}
          {adminPosts}
        </div>
      );
    }

    return <>{content}</>;
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  getPosts: () => getPosts(),
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
