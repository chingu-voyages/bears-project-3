import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const Signin = () => (
	<div className="signup-form">
		<Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="teal" textAlign="center">
					Sign in to your account
				</Header>
				<Form size="large">
					<Segment stacked>
						<Form.Input fluid icon="user" iconPosition="left" placeholder="Name" />
						<Form.Input
							fluid
							icon="user"
							iconPosition="left"
							placeholder="E-mail address"
						/>
						<Form.Input
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
						/>
						<Button color="purple" fluid size="large">
							Sign in
						</Button>
					</Segment>
				</Form>
				<Message>
					New to us? <Link to="/signup">Sign Up</Link>
				</Message>
			</Grid.Column>
		</Grid>
	</div>
);

export default Signin;
