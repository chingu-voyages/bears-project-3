import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

// Actions

// Presentational Components
import Header from './presentational/Header';
import Footer from './presentational/Footer';

// Assets
import logo from '../../assets/images/logo.svg';

// CSS

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
	render() {
		// eslint-disable-next-line react/prop-types
		const { children, auth } = this.props;
		return (
			<Responsive>
				<Header logo={logo} auth={auth} />
				{children}
				<Footer />
			</Responsive>
		);
	}
}

export default App;
