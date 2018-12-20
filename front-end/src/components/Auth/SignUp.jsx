import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Header, Message, Segment, Container } from 'semantic-ui-react';
import SignupForm from './presentational/SignupForm';

const Signup = props => (
	<Segment basic padded className="signup-form" style={{ height: '100vh' }}>
		<Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="purple" textAlign="center">
					Create an account
				</Header>
				<SignupForm {...props} />
				<Message>
					Already have an account?
					<br />
					<Link to="/signin">Sign In</Link>
				</Message>
			</Grid.Column>
		</Grid>
	</Segment>
);

export default connect(null)(Signup);
