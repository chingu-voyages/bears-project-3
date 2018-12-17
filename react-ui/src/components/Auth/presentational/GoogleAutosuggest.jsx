import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Form, Header } from 'semantic-ui-react';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import ReactGooglePlacesSuggest from 'react-google-places-suggest';
import config from '../../../config';
const API_KEY = config.GOOGLE_API_KEY || '';

class GoogleSuggest extends Component {
	state = {
		search: '',
		value: ''
	};

	handleInputChange = e => {
		this.setState({ search: e.target.value, value: e.target.value });
		this.props.input.onChange(e);
	};

	handleSelectSuggest(suggest) {
		this.setState({ search: '', value: suggest.formatted_address });
		this.props.input.onChange(suggest.formatted_address);
	}

	render() {
		const { search, value } = this.state;
		const { input, meta: { touched, error } } = this.props;

		return (
			<Fragment>
				<ReactGoogleMapLoader
					params={{
						key: API_KEY,
						libraries: 'places,geocode'
					}}
					render={googleMaps => {
						return (
							googleMaps && (
								<Fragment>
									<ReactGooglePlacesSuggest
										autocompletionRequest={{ input: search }}
										googleMaps={googleMaps}
										onSelectSuggest={this.handleSelectSuggest.bind(this)}
										customRender={prediction => (
											<Header
												as="h4"
												className="prediction"
												style={{
													textAlign: 'left',
													padding: 10
												}}
											>
												{prediction.description}
											</Header>
										)}
									>
										<Form.Input
											onBlur={input.onBlur}
											onFocus={input.onFocus}
											autoComplete="off"
											icon="location arrow"
											error={error && touched}
											iconPosition="left"
											type="text"
											value={value}
											placeholder="Search a location"
											onChange={this.handleInputChange}
										/>
									</ReactGooglePlacesSuggest>
								</Fragment>
							)
						);
					}}
				/>
			</Fragment>
		);
	}
}

GoogleSuggest.propTypes = {
	googleMaps: PropTypes.object
};

export default GoogleSuggest;
