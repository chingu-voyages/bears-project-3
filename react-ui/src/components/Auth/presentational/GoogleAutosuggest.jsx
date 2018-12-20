import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { Form, Header, Icon, Button } from 'semantic-ui-react'
import ReactGoogleMapLoader from 'react-google-maps-loader'
import ReactGooglePlacesSuggest from 'react-google-places-suggest'
import config from '../../../config'
const API_KEY = config.GOOGLE_API_KEY || ''

class GoogleSuggest extends Component {
	state = {
		search: '',
		value: '',
		currentPosition: null,
		loading: false
	}

	/**
	 * Get current location on load
	 */
	componentDidMount() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(position => {
				this.setState({ currentPosition: position })
			})
		}
	}

	/**
	 * Handle input change
	 */
	handleInputChange = e => {
		const { currentPosition, value, loading } = this.state
		this.setState({ search: e.target.value, value: e.target.value, loading: true })
		if (currentPosition) return this.props.input.onChange(currentPosition)
		this.props.input.onChange(value)
	}

	/**
	 * Handles suggest selection in list
	 * @param {*} suggest
	 */
	handleSelectSuggest(suggest) {
		this.setState({ search: '', value: suggest.formatted_address, loading: false })
		this.props.input.onChange(suggest.formatted_address)
	}

	/**
	 * Use google maps reverse geocoder to find city, state, country of user
	 */
	getLocationFromLatLng(geocoder, e = null) {
		e && e.preventDefault()
		const self = this
		const { currentPosition } = this.state
		const { latitude: lat, longitude: lng } = currentPosition.coords
		var latlng = { lat, lng }

		geocoder.geocode({ location: latlng }, function(results, status) {
			if (status === 'OK') {
				if (results[0]) {
					const newLocation = `${results[0].address_components[3].short_name}, ${
						results[0].address_components[4].short_name
					}, ${results[0].address_components[5].long_name}`

					self.setState({ value: newLocation, search: '', loading: false })
					self.props.input.onChange(newLocation)
				}
			} else {
				console.error('Geocoder failed due to: ' + status)
			}
		})
	}

	render() {
		const { search, value, loading } = this.state
		const {
			input,
			meta: { touched, error, dirty }
		} = this.props
		console.log(dirty, touched, this.state.search === '', this.state.value === '')

		return (
			<Fragment>
				<ReactGoogleMapLoader
					params={{
						key: API_KEY,
						libraries: 'places'
					}}
					render={googleMaps => {
						const geocoder = googleMaps ? new googleMaps.Geocoder() : null
						geocoder &&
							(this.state.value === '' && this.state.search === '') &&
							(!dirty && !touched) &&
							this.getLocationFromLatLng(geocoder)

						return (
							googleMaps && (
								<Fragment>
									<ReactGooglePlacesSuggest
										autocompletionRequest={{ input: search }}
										googleMaps={googleMaps}
										onSelectSuggest={this.handleSelectSuggest.bind(this)}
										customRender={prediction => {
											console.log(prediction)
											return (
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
											)
										}}
									>
										<Form.Input
											action
											onBlur={() => this.setState({ loading: false })}
											loading={loading}
											onBlur={input.onBlur}
											onFocus={input.onFocus}
											autoComplete="off"
											error={error && touched}
											type="text"
											value={value}
											iconPosition="left"
											onChange={this.handleInputChange}
										>
											<Icon name="location arrow" />
											<input type="text" placeholder="Search a location" />
											<Button
												color="purple"
												style={{ paddingRight: 25 }}
												icon="target"
												onClick={e =>
													this.getLocationFromLatLng(geocoder, e)
												}
											/>
										</Form.Input>
									</ReactGooglePlacesSuggest>
								</Fragment>
							)
						)
					}}
				/>
			</Fragment>
		)
	}
}

GoogleSuggest.propTypes = {
	googleMaps: PropTypes.object
}

export default GoogleSuggest
