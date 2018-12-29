import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import { AUTH_TOKEN } from '../../utils/constants';
import { LOGIN } from '../../utils/mutations';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  confirm = async (data) => {
    const { token } = data.login;
    this.saveUserData(token);
    this.props.history.push('/');
  }

  // TODO: Remove local storage and implement session cookie
  saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  render() {
    const { email, password } = this.state;
    return (
      <Segment basic padded className="signin-form">
        <Grid textAlign="center" style={{ height: '79vh' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="purple" textAlign="center">
              Sign in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Segment>
              <Mutation
                mutation={LOGIN}
                variables={{ email, password }}
                onCompleted={data => this.confirm(data)}
              >
                {mutation => (
                  <Button
                    fluid
                    maxWidth="20%"
                    color="purple"
                    size="large"
                    onClick={mutation}
                  >
                    Sign in
                  </Button>
                )}
              </Mutation>
            </Form>
            <Link to='/register'>
              <Button style={{ margin: 10 }}>
                Need to create an account?
            </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default SignIn;
