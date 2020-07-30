import React, { Component } from 'react';
import styles from './AdminScreen.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AdminPost from '../../components/AdminPost/AdminPost';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';

import { addPost, deletePost } from '../../store/actions/postActions';
import { getPosts } from '../../store/actions/postsActions';

export class AdminScreen extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  handleEditPost = (id) => {
    this.props.history.push(`/edit/${id}`);
  };

  render() {
    let adminPosts = this.props.posts.map((post) => {
      return (
        <AdminPost
          key={post._id}
          post={post}
          handleEditPost={() => this.handleEditPost(post._id)}
          handleDeletePost={() => this.props.deletePost(post._id)}
        ></AdminPost>
      );
    });
    let content = (
      <div className={styles.Container}>
        <span className={styles.AddContainer}>
          <Button onClick={this.props.addPost}>Add Empty Post</Button>
        </span>
        {adminPosts}
      </div>
    );

    if (this.props.loading) {
      content = <Spinner></Spinner>;
    } else if (!this.props.isAuthenticated) {
      content = <Redirect to='/'></Redirect>;
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
  addPost: () => addPost(),
  deletePost: (id) => deletePost(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
