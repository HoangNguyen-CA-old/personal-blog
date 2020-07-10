import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PostsDisplay from './containers/PostsDisplay/PostsDisplay';
import Layout from './containers/Layout/Layout';

import { getPosts } from './store/actions/postActions';

function App(props) {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path='/posts' />
          <Route exact path='/' component={PostsDisplay} />
        </Switch>
      </Router>
    </Layout>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(null, mapDispatchToProps)(App);
