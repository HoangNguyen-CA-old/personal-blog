import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from './actionTypes';
import axios from 'axios';

export const getPosts = () => (dispatch, getState) => {
  dispatch({ type: GET_POSTS_START });
  axios
    .get('/posts')
    .then((res) => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        posts: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_POSTS_FAIL,
        error: err,
      });
    });
};
