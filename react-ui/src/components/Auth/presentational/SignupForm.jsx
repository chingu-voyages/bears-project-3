import React from 'react';

import { reduxForm, Field } from 'redux-form';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
// <Form.Input fluid icon="user" iconPosition="left" placeholder="Name" />

const validate = values => {
	console.log(values);

	const errors = {};
	if (!values.username) {
		errors.username = 'Required';
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	errors.password = !values.password
		? 'Required'
		: values.password.length < 5 ? 'Must be atleast 5 characters' : null;

	return errors;
};
const renderInputField = ({
	input,
	label,
	type,
	meta: { touched, error, warning },
	name,
	placeholder,
	icon,
	iconPosition,
	...rest
}) => (
	<Form.Input
		{...input}
		fluid
		error={error && touched}
		icon={icon}
		type={type}
		iconPosition={iconPosition}
		placeholder={error !== undefined && touched ? error : placeholder}
		{...rest}
	/>
);

const submit = values => {
	console.log(values);
};

/**
 * Validation methods
 * @param {*} value 
 */
const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const SignupForm = ({ handleSubmit }) => (
	<Form size="large" onSubmit={handleSubmit(submit)}>
		<Segment stacked>
			<Form.Field>
				<Field
					name="username"
					icon="user"
					component={renderInputField}
					type="text"
					placeholder="Name"
					iconPosition="left"
					required={true}
				/>
			</Form.Field>
			<Form.Field>
				<Field
					name="email"
					icon="envelope"
					component={renderInputField}
					type="text"
					placeholder="Email address"
					iconPosition="left"
					required={true}
				/>
			</Form.Field>
			<Form.Field>
				<Field
					name="password"
					component={renderInputField}
					fluid
					icon="lock"
					iconPosition="left"
					placeholder="Password"
					type="password"
					required={true}
				/>
			</Form.Field>

			<Button color="purple" type="submit" fluid size="large">
				Sign up with email
			</Button>
		</Segment>
	</Form>
);

export default reduxForm({
	form: 'singup',
	validate
})(SignupForm);
