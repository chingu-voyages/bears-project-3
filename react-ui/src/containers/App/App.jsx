import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive } from 'semantic-ui-react';
// Actions
import { testAction } from '../../store/actions/testAction';

// Containers
import HomePage from '../HomePage/components/HomePage';
// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Assets
import logo from '../../assets/images/logo.svg';

// CSS
import './App.css';

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	testAction: () => dispatch(testAction())
});

class App extends Component {
	testAction = event => {
		this.props.testAction();
	};

	render() {
		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Header>
					<Navigation>of some sort</Navigation>
				</Header>
				<HomePage />
				<Footer />
			</Responsive>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
