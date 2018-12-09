import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Responsive } from 'semantic-ui-react';
import { Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';

// Actions
import { testAction } from '../../store/actions/testAction';

// Containers
import HomePage from '../HomePage/components/HomePage';
import Signup from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Assets
import logo from '../../assets/images/logo.svg';

// CSS
import './App.css';

const mapStateToProps = state => ({
	test: state.testReducer
});

const mapDispatchToProps = dispatch => ({
	testAction: () => dispatch(testAction())
});

class App extends Component {
	testAction = event => {
		this.props.testAction();
	};

	render() {
		const { history } = this.props;
		return (
			<ConnectedRouter history={history}>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					<Header logo={logo} />
					{/* Routes here... */}
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/signup" component={Signup} />
						<Route path="/signin" component={SignIn} />
					</Switch>
					<Footer />
				</Responsive>
			</ConnectedRouter>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
