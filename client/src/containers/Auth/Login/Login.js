import React, { Component } from 'react';
import styles from './Login.module.scss';
import { connect } from 'react-redux';

import FormInputs from '../../../components/UI/FormInputs/FormInputs';
import Button from '../../../components/UI/Button/Button';

import { login } from '../../../store/actions/authActions';
import { editPost } from '../../../store/actions/postActions';

export class Login extends Component {
  state = {
    post: null,
    controls: {
      email: {
        type: 'email',
        config: {},
        value: '',
      },
      password: {
        type: 'password',
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
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
  };

  render() {
    return (
      <div className={styles.Container}>
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <FormInputs
            controls={this.state.controls}
            handleInputChanged={this.handleInputChanged}
          ></FormInputs>
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  login: (email, password) => login(email, password),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
