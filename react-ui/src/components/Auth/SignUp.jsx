import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import SignupForm from './presentational/SignupForm';


const Signup = props => (
  <div className="signup-form"
    style={{ height: '100vh' }}
  >
    <Grid
      textAlign="center"
      style={{ height: '100%', paddingTop: 100 }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign Up
				</Header>
        <SignupForm {...props} />
        <Message>
          Already have an account?
					<br />
          <Link to="/signin">Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default connect(null)(Signup);
