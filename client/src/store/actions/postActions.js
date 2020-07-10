import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  SET_FOCUSED_POST,
} from './actionTypes';
import axios from 'axios';

export const getPosts = () => (dispatch, getState) => {
  if (getState().posts.posts.length === 0) {
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
  }
};

export const setFocusedPost = (post) => {
  return { type: SET_FOCUSED_POST, post };
};
