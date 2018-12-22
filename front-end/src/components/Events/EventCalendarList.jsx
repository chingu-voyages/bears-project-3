import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	Grid,
	Header,
	Segment,
	Button,
	Icon,
	Dimmer,
	Loader,
	Message,
	Card
} from 'semantic-ui-react'
import { selectDay } from '../../store/actions/eventsAction'
import { selectors } from '../../store/reducers/eventsReducer'
import moment from 'moment'

// Apollo
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './presentational/calendar.style.css'
import ListEvent from './presentational/ListEvent'
import { allEvents } from '../../apollo/events/queries'

const EventEmptyState = () => (
	<Segment placeholder padded={false}>
		<Header icon>
			<Icon name="ticket" />
			No Events...
		</Header>
		<Button primary>Search Events...</Button>
	</Segment>
)

class EventCalendarList extends Component {
	state = {
		/** Use selectedDay to indicate local state */
		selectedDays: null,
		selectedDay: null
	}

	/**
	 * Handle clicking day on calendar
	 */
	handleDayClick = (day, { selected }) => {
		console.log(day.toISOString())

		this.setState({
			selectedDay: selected ? undefined : day,
			selectedDays: selected ? undefined : day
		})
	}

	handleTodayClick = (day, modifiers) => {
		console.log(modifiers)

		this.setState({
			selectedDay: day,
			selectedDays: day
		})
	}

	clearDaySelection = () => {
		this.setState({
			selectedDays: null,
			selectedDay: null
		})
	}

	render() {
		const { where, orderBy, selectedCategory } = this.props
		const { selectedDay, selectedDays } = this.state
		console.log(
			moment().format('YYYY-MM-DD'),
			moment()
				.add(1, 'day')
				.format('YYYY-MM-DD')
		)

		let assignWhere = { ...where }
		if (selectedDay) {
			console.log('Selected day', selectedDay, moment(selectedDay).format())

			const assignedDay = moment(selectedDay)
			const tomorrow = moment(assignedDay).add(12, 'hours')
			assignWhere = {
				AND: {
					eventDate_gte: assignedDay.format('YYYY-MM-DD'),
					eventDate_lt: tomorrow.format('YYYY-MM-DD')
				}
			}
		}

		if (selectedCategory) {
			assignWhere = {
				AND: {
					...assignWhere,
					category: selectedCategory
				}
			}
		}

		console.log(assignWhere)

		/**
		 * Modifies calendar styling
		 */
		const modifiersStyles = {
			birthday: {
				color: 'white',
				backgroundColor: '#ffc107'
			},
			thursdays: {
				color: '#ffc107',
				backgroundColor: '#fffdee'
			},
			outside: {
				backgroundColor: 'white'
			},
			today: {
				//color: 'rgb(83, 89, 154)'
			},

			month: {
				width: '100%'
			},
			day: {
				color: '#fff'
			},
			// Style selected day
			selected: {
				fontWeight: 900,
				backgroundColor: 'rgb(83, 89, 154)',
				color: '#fff'
			},
			todayButton: {
				backgroundColor: 'rgb(83, 89, 154)',
				color: '#fff'
			}
		}

		return (
			<Segment basic padded={false}>
				<Grid container stackable reversed="mobile">
					<Grid.Column width={12}>
						<Card.Group>
							<Query
								query={allEvents}
								variables={{
									where: assignWhere,
									orderBy: orderBy
								}}
							>
								{({ loading, error, data: { events } }) => {
									console.log('Events in calendar: ', loading, error, events)

									if (loading)
										return (
											<Dimmer inverted active>
												<Loader active />
											</Dimmer>
										)
									if (error) return <Message />
									if (!events) return <EventEmptyState />
									return (
										events &&
										events.map(event => (
											<ListEvent key={event.id} event={event} />
										))
									)
								}}
							</Query>
						</Card.Group>
					</Grid.Column>
					<Grid.Column width={4}>
						<Header as="h3">Calendar</Header>
						<DayPicker
							selectedDays={selectedDays}
							showOutsideDays
							fromMonth={new Date()}
							onDayClick={this.handleDayClick}
							modifiersStyles={modifiersStyles}
						/>
						<Segment textAlign="center" basic>
							<Button.Group color="purple">
								<Button onClick={() => this.handleDayClick(new Date(), {})}>
									Today's Events
								</Button>
								<Button onClick={this.clearDaySelection}>
									<Icon name="delete" /> Clear
								</Button>
							</Button.Group>
						</Segment>
					</Grid.Column>
				</Grid>
			</Segment>
		)
	}
}

/**
 * Map state variables to props
 * @param {*} state
 * @param {*} ownProps
 */
const mapStateToProps = (state, ownProps) => {
	return {
		events: selectors.getFilteredEvents(state.events),
		selectedDay: state.events.selectedDay
	}
}

/**
 * Map actions to props
 * @param {*} dispatch
 * @param {*} ownProps
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
	...bindActionCreators(
		{
			selectDay
		},
		dispatch
	)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventCalendarList)
