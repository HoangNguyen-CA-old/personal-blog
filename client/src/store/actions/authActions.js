import axios from 'axios';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADING_START,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAIL,
  LOGOUT,
} from './actionTypes';

import { tokenConfig } from '../util';

export const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_START });

  const body = JSON.stringify({ email, password });

  axios
    .post('/auth', body)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        token: res.data.token,
        user: res.data.user,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        error: err.response.data.msg,
      });
    });
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING_START });

  axios
    .get('/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADING_SUCCESS,
        user: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_LOADING_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
