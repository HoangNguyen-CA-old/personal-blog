import {
  EDIT_POST_FAIL,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from '../actions/actionTypes';
import { updateObject } from '../util';

const initialState = {
  post: null,
  loading: false,
  editLoading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_POST_START:
      return updateObject(state, { editLoading: true });
    case EDIT_POST_SUCCESS:
      return updateObject(state, { editLoading: false });
    case EDIT_POST_FAIL:
      return updateObject(state, { editLoading: false });
    case GET_POST_START:
      return updateObject(state, { loading: true });
    case GET_POST_SUCCESS:
      return updateObject(state, { post: action.post, loading: false });
    case GET_POST_FAIL:
      return updateObject(state, {
        post: null,
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default postReducer;
