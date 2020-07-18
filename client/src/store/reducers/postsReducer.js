import {
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
  GET_POSTS_START,
} from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START:
      return updateObject(state, { loading: true, error: null });
    case GET_POSTS_SUCCESS:
      return updateObject(state, {
        posts: action.posts,
        loading: false,
        error: null,
      });
    case GET_POSTS_FAIL:
      return updateObject(state, {
        posts: [],
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default postsReducer;
