import React, { Component } from 'react';
import { connect } from 'react-redux';

import FocusedPost from '../../components/FocusedPost/FocusedPost';
import EditedPost from '../../components/EditedPost/EditedPost';
import Controls from '../../components/Controls/Controls';
import ErrorMessage from '../../components/Error/ErrorMessage';
import Spinner from '../../components/UI/Spinner/Spinner';

import { editPost, getPost } from '../../store/actions/postActions';

class FullPost extends Component {
  state = {
    focusedPost: null,
    editing: false,
    controls: {
      title: {
        type: 'input',
        config: {},
        value: '',
      },
      image: {
        type: 'input',
        config: {},
        value: '',
      },
      markDown: {
        type: 'textarea',
        config: {},
        value: '',
      },
    },
    tags: [],
  };

  handleToggleEdit = () => {
    this.setState((prevState) => {
      return { editing: !prevState.editing };
    });
  };

  handleInputChanged = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
      },
    };

    this.setState({
      controls: updatedControls,
    });
  };

  handleEditPost = () => {
    this.props.editPost(
      this.props.focusedPost._id,
      this.state.controls.title.value,
      this.state.controls.image.value,
      this.state.tags,
      this.state.controls.markDown.value
    );
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPost(id);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.focusedPost !== prevState.focusedPost) {
      return {
        controls: {
          ...prevState.controls,
          markDown: {
            ...prevState.controls.markDown,
            value: nextProps.focusedPost.markDown,
          },
          title: {
            ...prevState.controls.title,
            value: nextProps.focusedPost.title,
          },
          image: {
            ...prevState.controls.image,
            value: nextProps.focusedPost.image,
          },
        },
        tags: nextProps.focusedPost.tags,
        focusedPost: nextProps.focusedPost,
      };
    }
    return prevState;
  }

  render() {
    let content = <ErrorMessage>Post does not exist!</ErrorMessage>;
    if (this.props.loading) {
      content = <Spinner />;
    } else if (this.props.focusedPost !== null) {
      if (this.state.editing) {
        content = (
          <>
            <EditedPost
              controls={this.state.controls}
              handleInputChanged={this.handleInputChanged}
              loading={this.props.editLoading}
            />
            <Controls
              toggleEdit={this.handleToggleEdit}
              editing={this.state.editing}
              editPost={this.handleEditPost}
            />
          </>
        );
      } else {
        content = (
          <>
            <FocusedPost focusedPost={this.props.focusedPost} />
            <Controls
              toggleEdit={this.handleToggleEdit}
              editing={this.state.editing}
            />
          </>
        );
      }
    }
    return <>{content}</>;
  }
}

const mapStateToProps = (state) => ({
  focusedPost: state.post.post,
  loading: state.post.loading,
  editLoading: state.post.editLoading,
});

const mapDispatchToProps = {
  editPost: (id, title, image, tags, markDown) =>
    editPost(id, title, image, tags, markDown),
  getPost: (id) => getPost(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
