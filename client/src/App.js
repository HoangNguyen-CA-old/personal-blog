import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PostsDisplay from './containers/PostsDisplay/PostsDisplay';
import Layout from './containers/Layout/Layout';

import { getPosts } from './store/actions/postActions';

function App(props) {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={PostsDisplay} />
        </Switch>
      </Layout>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(null, mapDispatchToProps)(App);
