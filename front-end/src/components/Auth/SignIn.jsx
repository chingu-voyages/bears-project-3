import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { loginUser } from '../../apollo/auth/mutations'

class Signin extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSignin = () => {}

	confirm = async data => {
		const { token } = data.login
		this.saveUserData(token)
		// this.props.history.push('/')
	}

	saveUserData = token => {
		//localStorage.setItem(REACT_APP_AUTH_TOKEN, token);
	}

	render() {
		const { email, password } = this.state
		return (
			<Segment basic padded className="signin-form">
				<Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="purple" textAlign="center">
							Sign in to your account
						</Header>
						<Mutation
							mutation={loginUser}
							variables={{ email, password }}
							onCompleted={this.confirm}
						>
							{mutation => {
								console.log(mutation)

								return (
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
											<Button
												onClick={mutation}
												color="purple"
												fluid
												size="large"
											>
												Sign in
											</Button>
										</Segment>
									</Form>
								)
							}}
						</Mutation>
						<Message>
							New to us? <Link to="/signup">Sign Up</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</Segment>
		)
	}
}
export default Signin
