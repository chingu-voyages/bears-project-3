import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import { AUTH_TOKEN } from '../../utils/constants';
import { REGISTER_USER } from '../../utils/mutations';

class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
  }

  confirm = async (data) => {
    const { token } = data.register;
    this.saveUserData(token);
    this.props.history.push('/');
  }

  // TODO: Remove local storage and implement session cookie
  saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  render() {
    const { email, password, name } = this.state;
    return (
      <Segment basic padded className="signin-form">
        <Grid textAlign="center" style={{ height: '79vh' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="purple" textAlign="center">
              Register an account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Name"
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
                  type="text"
                />
                <Form.Input
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  type="text"
                  placeholder="E-mail"
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
                mutation={REGISTER_USER}
                variables={{ email, password, name }}
                onCompleted={data => this.confirm(data)}
              >
                {mutation => (
                  <Button
                    fluid
                    maxWidth="50%"
                    color="purple"
                    size="large"
                    onClick={mutation}
                  >
                    Register
                  </Button>
                )}
              </Mutation>
            </Form>
            <Link to='/signin'>
              <Button style={{ margin: 10 }}>
                Already have an account?
            </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default Register;
