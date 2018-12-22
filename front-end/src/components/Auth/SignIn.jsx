import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import gql from 'graphql-tag';

const { REACT_APP_AUTH_TOKEN } = process.env;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSignin = () => { }

  confirm = async data => {
    const { token } = data.login
    this.saveUserData(token)
    this.props.history.push('/')
  }

  saveUserData = token => {
    localStorage.setItem(REACT_APP_AUTH_TOKEN, token);
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
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={data => this.confirm(data)}
            >
              {mutation => (
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail address"
                      autoComplete="email"
                      value={email}
                      onChange={e => this.setState({ email: e.target.value })} />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      autoComplete="off"
                      value={password}
                      onChange={e => this.setState({ password: e.target.value })} />
                  </Segment>
                  <Button
                    onClick={mutation}
                    color="purple"
                    fluid
                    size="large"
                  >
                    Sign in
											</Button>
                </Form>
              )}
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
