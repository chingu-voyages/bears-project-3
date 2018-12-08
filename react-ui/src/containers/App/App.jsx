import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive } from 'semantic-ui-react';
import {
  Route, Link, Redirect, withRouter, Switch,
} from 'react-router-dom';

// Actions
import { testAction } from '../../store/actions/testAction';

// Containers
import HomePage from '../HomePage/components/HomePage';
import Register from '../Auth/Register';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Assets
import logo from '../../assets/images/logo.svg';

// CSS
import './App.css';

const mapStateToProps = state => ({
  test: state.testReducer,
});

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction()),
});

class App extends Component {
  testAction = (event) => {
    this.props.testAction();
  };

  render() {
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Header logo={logo} />
        {/* Routes here... */}
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </Responsive>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
