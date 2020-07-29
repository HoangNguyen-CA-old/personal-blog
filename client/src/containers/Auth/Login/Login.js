import React, { Component } from 'react';
import styles from './Login.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FormInputs from '../../../components/UI/FormInputs/FormInputs';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import { login } from '../../../store/actions/authActions';

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
    let content = (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <FormInputs
          controls={this.state.controls}
          handleInputChanged={this.handleInputChanged}
        ></FormInputs>

        <Button type='submit' full={1}>
          Submit
        </Button>
      </form>
    );

    if (this.props.loading) {
      content = <Spinner />;
    } else if (this.props.isAuthenticated) {
      content = <Redirect to='/admin'></Redirect>;
    }

    return (
      <div className={styles.Container}>
        <h1 className={styles.Title}>Log In</h1>
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  login: (email, password) => login(email, password),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
