import {
  USER_LOADING_START,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_AUTH_ERRORS,
} from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  loading: false,
  isAuthenticated: false,
  loginError: null,
};

const removeToken = (state, props = {}) => {
  localStorage.removeItem('token');
  return updateObject(state, {
    ...props,
    token: null,
    user: null,
    isAuthenticated: false,
    loading: false,
  });
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case USER_LOADING_START:
      return updateObject(state, { loading: true });
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.token);
      return updateObject(state, {
        token: action.token,
        user: action.user,
        loading: false,
        isAuthenticated: true,
      });
    case USER_LOADING_SUCCESS:
      return updateObject(state, {
        user: action.user,
        loading: false,
        isAuthenticated: true,
      });
    case LOGIN_FAIL:
      return removeToken(state, { loginError: action.error });
    case LOGOUT:
    case USER_LOADING_FAIL:
      return removeToken(state);
    case CLEAR_AUTH_ERRORS:
      return updateObject(state, { loginError: null });

    default:
      return state;
  }
};

export default postReducer;
