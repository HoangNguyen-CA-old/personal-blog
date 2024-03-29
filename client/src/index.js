import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import thunk from 'redux-thunk';
import axios from 'axios';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './store/reducers/index';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
