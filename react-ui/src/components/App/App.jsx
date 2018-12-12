import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Responsive } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

// Actions


// Component Containers
import HomePage from '../HomePage/HomePage';
import Signup from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';

// Presentational Components
import Header from './presentational/Header';
import Footer from './presentational/Footer';

// Assets
import logo from '../../assets/images/logo.svg';

// CSS
import './App.css';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const { history } = this.props;

const App = () => (
  <ConnectedRouter history={history}>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Header logo={logo} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={SignIn} />
      </Switch>
      <Footer />
    </Responsive>
  </ConnectedRouter>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
