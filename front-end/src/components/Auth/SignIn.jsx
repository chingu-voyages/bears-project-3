import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const Signin = () => (
	<Segment basic padded className="signin-form">
		<Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="purple" textAlign="center">
					Sign in to your account
				</Header>
				<Form size="large">
					<Segment stacked>
						<Form.Input
							fluid
							icon="user"
							iconPosition="left"
							placeholder="E-mail address"
							autoComplete="email"
						/>
						<Form.Input
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
							autoComplete="off"
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
	</Segment>
);

export default Signin;
