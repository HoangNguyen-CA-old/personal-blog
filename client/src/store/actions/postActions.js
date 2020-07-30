import {
  GET_POST_START,
  GET_POST_FAIL,
  EDIT_POST_FAIL,
  EDIT_POST_SUCCESS,
  EDIT_POST_START,
  GET_POST_SUCCESS,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
} from './actionTypes';
import axios from 'axios';
import { tokenConfig } from '../util';
import { getPosts } from '../actions/postsActions';

export const editPost = (id, title, image, tags, markDown) => (
  dispatch,
  getState
) => {
  dispatch({ type: EDIT_POST_START });
  axios
    .put(
      `/posts/${id}`,
      { title, image, tags, markDown },
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({ type: EDIT_POST_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: EDIT_POST_FAIL });
    });
};

export const getPost = (id) => (dispatch) => {
  dispatch({ type: GET_POST_START });
  axios
    .get(`/posts/${id}`)
    .then((res) => {
      dispatch({ type: GET_POST_SUCCESS, post: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_POST_FAIL, error: err.response.data.msg });
    });
};

export const addPost = () => (dispatch, getState) => {
  dispatch({ type: ADD_POST_START });
  let body = {
    title: 'temp',
    image: 'temp',
    tags: [],
    markDown: 'temp',
  };
  axios
    .post(`/posts`, body, tokenConfig(getState))
    .then((res) => {
      dispatch(getPosts());
      dispatch({ type: ADD_POST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: ADD_POST_FAIL, error: err.response.data.msg });
    });
};
