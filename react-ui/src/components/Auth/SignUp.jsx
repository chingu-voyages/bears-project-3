import React from 'react';

import { Link } from 'react-router-dom';
import { Grid, Header, Message } from 'semantic-ui-react';
import SignupForm from './presentational/SignupForm';

const Signup = props => {
	console.log('Signup Props: ', props);
	return (
		<div className="signup-form" style={{ height: '100vh' }}>
			<Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" color="teal" textAlign="center">
						Sign Up
					</Header>
					<SignupForm />
					<Message>
						Already have an account? <Link to="/signin">Sign In</Link>
					</Message>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Signup;
