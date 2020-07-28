import React, { Component } from 'react';
import { connect } from 'react-redux';

import FocusedPost from '../../components/FocusedPost/FocusedPost';
import ErrorMessage from '../../components/Error/ErrorMessage';
import Spinner from '../../components/UI/Spinner/Spinner';

import { getPost } from '../../store/actions/postActions';
class FullPost extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPost(id);
  }

  render() {
    let content = <ErrorMessage>Post does not exist!</ErrorMessage>;

    if (this.props.loading) {
      content = <Spinner />;
    } else if (this.props.focusedPost !== null) {
      content = (
        <>
          <FocusedPost focusedPost={this.props.focusedPost} />
        </>
      );
    }

    return <>{content}</>;
  }
}

const mapStateToProps = (state) => ({
  focusedPost: state.post.post,
  loading: state.post.loading,
});

const mapDispatchToProps = {
  getPost: (id) => getPost(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
