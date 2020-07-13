import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import FocusedPost from '../../components/FocusedPost/FocusedPost';
import EditedPost from '../../components/EditedPost/EditedPost';
import Controls from '../../components/Controls/Controls';

class FullPost extends Component {
  state = {
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
    fetched: false,
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.focusedPost && prevState.fetched === false) {
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
        fetched: true,
      };
    }
    return prevState;
  }

  render() {
    let content = <Redirect to='/'></Redirect>;
    if (this.props.focusedPost !== null) {
      if (this.state.editing) {
        content = (
          <>
            <EditedPost
              controls={this.state.controls}
              handleInputChanged={this.handleInputChanged}
            />
            <Controls
              toggleEdit={this.handleToggleEdit}
              editing={this.state.editing}
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
  focusedPost: state.posts.focusedPost,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
