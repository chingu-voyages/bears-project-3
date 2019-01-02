import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import { AUTH_TOKEN } from '../../utils/constants';
import { REGISTER_USER } from '../../utils/mutations';

const Register = ({ values,
  touched,
  dirty,
  errors,
  handleChange,
  handleBlur, history, ...props
}) => {
  console.log(props);

  const confirm = async (data) => {
    const { token } = data.register;
    saveUserData(token);
    history.push('/');
  }

  // TODO: Remove local storage and implement session cookie
  const saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  const handleError = error => console.log(error);


  const { name, email, password } = values
  const { name: nameError, email: emailError, password: passwordError } = errors

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
            {mutation => (
              <Form size="large" onSubmit={mutation}>
                <Segment stacked>

                  <Form.Input
                    error={errors.name && touched ? true : false}
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
                    error={errors.email && touched ? true : false}
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
                    error={errors.password && touched ? true : false}
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
                    disabled={dirty && (nameError || emailError || passwordError)}
                    fluid
                    maxWidth="50%"
                    color="purple"
                    size="large"
                    onClick={mutation}
                  >
                    Register
                  </Button>
                </Segment>
              </Form>
            )}
          </Mutation>
          <Link to='/signin'>
            <Button style={{ margin: 10 }}>
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
  validate: values => {
    const errors = {};

    errors.name = !values.name
      ? 'Name is Required'
      : !values.name.match(/[A-Za-z]/g)
        ? 'Name can only be letters'
        : undefined

    errors.email = !values.email
      ? 'Email is Required'
      : !values.email.match(/@/g)
        ? 'Email must be valid'
        : undefined

    errors.password = !values.password
      ? 'Password is Required'
      : undefined


    return errors;
  },
  displayName: 'SignupForm',
})(Register)

export default FormikSignup;
