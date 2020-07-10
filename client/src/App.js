import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import PostsDisplay from './containers/PostsDisplay/PostsDisplay';

import { getPosts } from './store/actions/postActions';

function App(props) {
  useEffect(() => {
    props.getPosts();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path='/posts' />
        <Route exact path='/' component={PostsDisplay} />
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(null, mapDispatchToProps)(App);
