import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { withFormik, ErrorMessage } from "formik";
import { AUTH_TOKEN } from '../../utils/constants';
import { LOGIN } from '../../utils/mutations';

const SignIn = ({
  values,
  touched,
  dirty,
  errors,
  handleChange,
  isSubmitting,
  setSubmitting,
  isValid,
  isValidating,
  handleBlur,
  history
}) => {


  const confirm = async (data) => {
    const { token } = data.login;
    saveUserData(token);
    history.push('/');
  }

  // TODO: Remove local storage and implement session cookie
  const saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  const { email, password } = values

  return (
    <Segment basic padded className="signin-form">
      <Grid textAlign="center" style={{ height: '79vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="purple" textAlign="center">
            Sign in to your account
            </Header>
          <Mutation
            mutation={LOGIN}
            variables={{ email, password }}
            onCompleted={confirm}
          >
            {(signIn, { loading, error }) => (
              <Form size="large" onSubmit={signIn}>
                <Segment stacked>
                  <Form.Input
                    error={errors.email && touched.email ? true : false}
                    fluid
                    icon="envelope"
                    iconPosition="left"
                    type="text"
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    onChange={handleChange}
                    name="email"
                    onBlur={handleBlur}
                  />
                  <Form.Input
                    error={errors.password && touched.password ? true : false}
                    fluid
                    icon="lock"
                    iconPosition="left"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {error && <p>Error Signing in</p>}
                </Segment>

                <Button
                  loading={loading}
                  disabled={!isValid}
                  fluid
                  color="purple"
                  size="large"
                  onClick={signIn}
                >
                  Sign in
                  </Button>
              </Form>
            )}
          </Mutation>
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

const FormikSignin = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validate: ({ email, password }) => {
    const errors = {}

    if (!email || !email.match(/@/gi)) {
      errors.email = 'Email is required'
    }

    if (!password) {
      errors.password = 'Password is required'
    }

    return errors
  },
  displayName: 'SigninForm'
})(SignIn);

export default FormikSignin

