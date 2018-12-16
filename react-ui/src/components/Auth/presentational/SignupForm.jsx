import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import { signupUser } from '../../../store/actions/eventsAction';
import GoogleAutoSuggest from './GoogleAutosuggest';

const validateForm = values => {
	const errors = {};

	errors.username = !values.username
		? 'Username is Required'
		: values.username.length > 15 ? 'Must be 15 characters or less' : undefined;

	errors.email = !values.password
		? 'Email is Required'
		: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			? 'Invalid email address'
			: undefined;

	errors.password = !values.password
		? 'Password is Required'
		: values.password.length < 5 ? 'Must be atleast 5 characters' : undefined;

	errors.userLocation = !values.userLocation
		? 'Please enter your location'
		: values.userLocation.length < 3 ? 'Must be a valid location' : undefined;

	errors.passwordConfirm = !values.passwordConfirm
		? 'Password Confirmation is Required'
		: values.password !== values.passwordConfirm ? 'Passwords mus match' : undefined;

	return errors;
};

class SignupForm extends Component {
	renderErrors = (errors, touched) => {
		if (!touched) return null;
		const errorNodes = [];
		for (let error in errors) {
			console.log(errors[error]);

			if (errors[error] !== undefined) {
				errorNodes.push(errors[error]);
			}
		}
		if (!errorNodes.length) return null;
		return (
			<Message
				error
				style={{ textAlign: 'left' }}
				header="Please enter information in all the required fields"
				list={errorNodes}
			/>
		);
	};

	render() {
		const {
			handleSubmit,
			pristine,
			submitting,
			invalid,
			formValues,
			validate,
			dirty,
			submitFailed
		} = this.props;

		const errors = validate(formValues);

		return (
			<Segment stacked>
				<Form size="large" onSubmit={handleSubmit(this.submitSignup)}>
					<Form.Field>
						<Field
							name="username"
							icon="user"
							component={this.renderInputField}
							type="text"
							placeholder="Name"
							iconPosition="left"
						/>
					</Form.Field>
					<Form.Field>
						<Field
							name="email"
							icon="envelope"
							component={this.renderInputField}
							type="text"
							placeholder="Email address"
							iconPosition="left"
						/>
					</Form.Field>
					<Form.Field>
						<Field
							name="password"
							component={this.renderInputField}
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
						/>
					</Form.Field>
					<Form.Field>
						<Field
							name="passwordConfirm"
							component={this.renderInputField}
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password Again"
							type="password"
						/>
					</Form.Field>
					<Form.Field />
					<Form.Field>
						<Field name="userLocation" component={GoogleAutoSuggest} />
					</Form.Field>
					<Button
						disabled={pristine || submitting || invalid}
						style={{ marginTop: 10 }}
						color="purple"
						type="submit"
						fluid
						size="large"
					>
						Sign up with email
					</Button>
				</Form>
				{submitFailed && errors && this.renderErrors(errors, dirty)}
			</Segment>
		);
	}

	/**
	 * Handle rendering of redux form field
	 */
	renderInputField = ({
		input,
		type,
		meta: { touched, error, warning },
		placeholder,
		icon,
		iconPosition
	}) => (
		<Form.Input
			{...input}
			fluid
			error={error && touched}
			icon={icon}
			type={type}
			iconPosition={iconPosition}
			placeholder={error !== undefined && touched ? error : placeholder}
		/>
	);

	/**
	 * Handle Submit ...
	 * Submit form to store
	 */
	submitSignup = values => {
		console.log('Submitted form: ', values);
		this.props.signupUser(values);
	};
}

/**
 * Create form selector
 */
const selector = formValueSelector('signup');

/**
 * Map state actions to props
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			signupUser
		},
		dispatch
	)
});

/**
 * Map state to props
 * @param {*} state 
 */
const mapStateToProps = state => {
	const selectedUserLocation = selector(state, 'userLocation');
	const formValues = selector(
		state,
		'password',
		'passwordConfirm',
		'email',
		'username',
		'userLocation'
	);

	return {
		selectedUserLocation,
		formValues
	};
};

// Create Redux Form
const reduxSignup = reduxForm({
	form: 'signup',
	validate: validateForm
})(SignupForm);

// Export connected form to state
export default connect(mapStateToProps, mapDispatchToProps)(reduxSignup);
