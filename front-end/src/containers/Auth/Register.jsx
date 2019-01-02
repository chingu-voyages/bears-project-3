import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import { AUTH_TOKEN } from '../../utils/constants';
import { REGISTER_USER } from '../../utils/mutations';

const Register = ({
  values,
  touched,
  dirty,
  errors,
  handleChange,
  isSubmitting,
  setSubmitting,
  isValid,
  isValidating,
  handleBlur, history, ...props
}) => {
  const confirm = async (data) => {
    const { token } = data.register;
    saveUserData(token);
    setSubmitting(false)
    history.push('/');
  }

  // TODO: Remove local storage and implement session cookie
  const saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  const handleError = error => {
    setSubmitting(false)
  }

  const { name, email, password } = values

  return (
    <Segment basic padded className="signin-form">
      <Grid textAlign="center" style={{ height: '79vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="purple" textAlign="center">
            Register an account
            </Header>
          <Mutation
            mutation={REGISTER_USER}
            variables={{ email, password, name }}
            onCompleted={data => confirm(data)}
            onError={handleError}
          >
            {(signupUser, { loading, error }) => (
              <Form size="large" onSubmit={e => {
                e.preventDefault()
                setSubmitting(true)
                signupUser({ variables: { email, password, name } })
              }}>
                <Segment stacked>

                  <Form.Input
                    error={errors.name && touched.name ? true : false}
                    onBlur={handleBlur}
                    icon="user"
                    iconPosition="left"
                    placeholder="Name"
                    value={name}
                    type="text"
                    name='name'
                    onChange={handleChange}
                  />
                  <Form.Input
                    error={errors.email && touched.email ? true : false}
                    onBlur={handleBlur}
                    icon="envelope"
                    iconPosition="left"
                    type="text"
                    placeholder="E-mail"
                    autoComplete="email"
                    value={email}
                    onChange={handleChange}
                    name='email'
                  />
                  <Form.Input
                    error={errors.password && touched.password ? true : false}
                    onBlur={handleBlur}
                    icon="lock"
                    iconPosition="left"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={handleChange}
                    name='password'
                  />
                  <Button
                    disabled={
                      (!isValid || isSubmitting)
                    }
                    loading={isSubmitting || loading}
                    fluid
                    color="purple"
                    size="large"
                    onClick={e => {
                      e.preventDefault()
                      setSubmitting(true)
                      signupUser({ variables: { email, password, name } })
                    }}
                  >
                    Register
                  </Button>
                </Segment>
              </Form>
            )}
          </Mutation>
          <Link to='/signin'>
            <Button style={{ margin: 10 }} >
              Already have an account?
            </Button>
          </Link>
        </Grid.Column>
      </Grid>
    </Segment >
  );
}

const FormikSignup = withFormik({
  mapPropsToValues: () => ({ name: '', email: '', password: '' }),
  // Sync Validation
  validate: ({ name, email, password }) => {
    const errors = {};

    if (!name || !name.match(/[A-Za-z]/gi)) {
      errors.name = 'Error in name'
    }

    if (!email || !email.match(/@/gi)) {
      errors.email = 'Error in email'
    }

    if (!password || password.length <= 4) {
      errors.password = 'Error in Password'
    }

    return errors;
  },
  displayName: 'SignupForm',
})(Register)

export default FormikSignup;
