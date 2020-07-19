import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PostsDisplay from './containers/PostsDisplay/PostsDisplay';
import Layout from './containers/Layout/Layout';
import FullPost from './containers/FullPost/FullPost';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/article/:id' component={FullPost}></Route>
          <Route path='/' component={PostsDisplay} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
