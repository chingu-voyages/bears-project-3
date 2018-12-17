import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, Grid, Header, Image, Message, Segment,
} from 'semantic-ui-react';

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
          Sign Up
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input 
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button color="teal" fluid size="large">
              Sign up with email
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account?
          <br />
          <Link to="/signin">Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default Signup;
