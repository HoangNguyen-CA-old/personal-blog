import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  auth: authReducer,
});

export default rootReducer;
