import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './EditedPost.module.scss';

import FormInputs from '../../components/UI/FormInputs/FormInputs';
import Spinner from '../../components/UI/Spinner/Spinner';

import { getPost, editPost } from '../../store/actions/postActions';

class EditedPost extends Component {
  state = {
    post: null,
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.post !== prevState.post) {
      return {
        controls: {
          ...prevState.controls,
          markDown: {
            ...prevState.controls.markDown,
            value: nextProps.post.markDown,
          },
          title: {
            ...prevState.controls.title,
            value: nextProps.post.title,
          },
          image: {
            ...prevState.controls.image,
            value: nextProps.post.image,
          },
        },
        tags: nextProps.post.tags,
        post: nextProps.post,
      };
    }
    return prevState;
  }

  handleEditPost = () => {
    this.props.editPost(
      this.props.post._id,
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

  render() {
    let content = <Spinner />;
    if (!this.props.loading) {
      content = (
        <div className={styles.EditedPost}>
          <h1 className={styles.Title}>Editing Post</h1>
          <FormInputs
            controls={this.state.controls}
            handleInputChanged={this.handleInputChanged}
          ></FormInputs>
        </div>
      );
    }
    return <>{content}</>;
  }
}

const mapStateToProps = (state) => ({
  post: state.post.post,
  loading: state.post.loading,
});

const mapDispatchToProps = {
  getPost: (id) => getPost(id),
  editPost: (id, title, image, tags, markDown) =>
    editPost(id, title, image, tags, markDown),
};

export default connect(mapStateToProps, mapDispatchToProps)(EditedPost);
