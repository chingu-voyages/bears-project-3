import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import {
	Grid,
	Container,
	Segment,
	Header,
	Button,
	Icon,
	Card,
	Loader,
	Message
} from 'semantic-ui-react'

// Apollo
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Event from './presentational/Event'
import EventMenu from './presentational/EventMenu'

// Redux
import { selectors } from '../../store/reducers/eventsReducer'
import { selectDay, setFilter } from '../../store/actions/eventsAction'
import EventCalendarList from './EventCalendarList'

import { allEvents } from '../../apollo/events/queries'

const EmptyEvents = () => (
	<Segment placeholder>
		<Header icon>
			<Icon name="ticket" />
			No Events...
		</Header>
		<Button primary>Search Events...</Button>
	</Segment>
)

const EventList = ({ events, selectedCategory, history }) => {
	/**
	 * Generates event list
	 */
	const renderEvents = events => {
		return events.map(event => <Event event={event} key={event.id} history={history} />)
	}

	return (
		<Segment basic>
			<Query
				query={allEvents}
				variables={{
					where: {
						eventDate_gte: new Date()
					}
				}}
			>
				{({ loading, error, data: { events } }) => {
					console.log('All Events ', error, events)

					if (loading) return <Loader />
					if (error) return <Message />
					if (!events.length) return <EmptyEvents />
					return <Card.Group itemsPerRow={4}>{renderEvents(events)}</Card.Group>
				}}
			</Query>
		</Segment>
	)
}

EventList.propTypes = {
	setFilter: PropTypes.func.isRequired,
	setDay: PropTypes.func
}

EventList.defaultProps = {
	setFilter
}

/**
 * Mapping state variables to props
 * @param {*} state
 */
const mapStateToProps = state => {
	const { selectedCategory } = state.events
	return {
		router: state.router,
		events: selectors.getFilteredEvents(state.events),
		categories: state.events.eventCategories,
		selectedCategory
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	...bindActionCreators(
		{
			selectDay,
			setFilter
		},
		dispatch
	)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventList)
