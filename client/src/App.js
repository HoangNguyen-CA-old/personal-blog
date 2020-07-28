import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PostsDisplay from './containers/PostsDisplay/PostsDisplay';
import Layout from './containers/Layout/Layout';
import AdminScreen from './containers/AdminScreen/AdminScreen';
import FullPost from './containers/FullPost/FullPost';
import EditedPost from './containers/EditedPost/EditedPost';

import { loadUser } from './store/actions/authActions';

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path='/admin' component={AdminScreen}></Route>
            <Route path='/article/:id' component={FullPost}></Route>
            <Route path='/edit/:id' component={EditedPost}></Route>
            <Route path='/' component={PostsDisplay} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loadUser: () => loadUser(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
