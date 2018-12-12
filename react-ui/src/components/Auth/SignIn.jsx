import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const Signup = () => (
	<div className="signup-form">
		<Grid
			textAlign="center"
			style={{ height: '100%', paddingTop: 100 }}
			verticalAlign="middle"
		>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="teal" textAlign="center">
					<Image src="/logo.png" />
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
						<Button color="teal" fluid size="large">
							Sign in
						</Button>
					</Segment>
				</Form>
				<Message>
					New to us?
					<br />
					<Link to="/signup">Sign Up</Link>
				</Message>
			</Grid.Column>
		</Grid>
	</div>
);

export default Signup;
