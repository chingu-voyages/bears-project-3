import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Header, Segment, Button, Icon } from 'semantic-ui-react';
import { selectDay } from '../../store/actions/eventsAction';
import { selectors } from '../../store/reducers/eventsReducer';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './presentational/calendar.style.css';
import ListEvent from './presentational/ListEvent';
class EventCalendarList extends Component {
	state = {
		/** Use selectedDay to indicate local state */
		selectedDay: null
	};

	/**
	 * Handle clicking day on calendar
	 */
	handleDayClick = (day, { selected }) => {
		this.props.selectDay(day);
		this.setState({
			selectedDay: selected ? undefined : day
		});
	};

	handleTodayClick = (day, modifiers) => {
		this.props.selectDay(day);
		this.setState({ selectedDay: day });
	};

	clearDaySelection = () => {
		this.setState({
			selectedDay: null
		});
		this.props.selectDay(null);
	};

	render() {
		const { events } = this.props;

		const selectedDays = events.reduce(
			(acc, event) =>
				acc.includes(event.dateStarting)
					? acc
					: [
							...acc,
							event.dateStarting
						],
			[]
		);

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
		};

		return (
			<Segment basic>
				<Grid container stackable reversed="mobile">
					<Grid.Column width={12} stretched>
						<div>{events.map(event => <ListEvent event={event} />)}</div>
					</Grid.Column>
					<Grid.Column width={4}>
						<Header as="h3">Calendar</Header>
						<DayPicker
							selectedDays={this.state.selectedDay || selectedDays}
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
		);
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
	};
};

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
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCalendarList);
