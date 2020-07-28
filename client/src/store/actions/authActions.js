import axios from 'axios';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './actionTypes';

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
