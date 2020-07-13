import React, { Component } from 'react';
import { connect } from 'react-redux';

import FocusedPost from '../../components/FocusedPost/FocusedPost';
import EditedPost from '../../components/EditedPost/EditedPost';

import styles from './FullPost.module.scss';

class FullPost extends Component {
  state = {
    controls: {
      markDown: {
        type: 'textarea',
        config: {},
        value: '',
      },
    },
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
    console.log(this.state.controls);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.focusedPost) {
      return {
        markDown: nextProps.focusedPost.markDown,
      };
    }
    return;
  }

  render() {
    return (
      <>
        <FocusedPost focusedPost={this.props.focusedPost} />
        <EditedPost
          controls={this.state.controls}
          handleInputChanged={this.handleInputChanged}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  focusedPost: state.posts.focusedPost,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
