import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Menu, Header, Button } from 'semantic-ui-react'
import EventFilter from './EventFilter'

const EventMenu = ({
	categories,
	handleChange,
	history,
	location,
	onSelectCategory,
	selectedCategory,
}) => {
	const handleListClick = () => {
		history.replace('/events')
	}

	const handleCalendarClick = () => {
		history.replace('/events/calendar')
	}
	return (
		<Fragment>
			<Menu borderless fluid style={{ border: 'none', boxShadow: 'none' }}>
				<Menu.Item>
					<Header as="h2">Events for this week</Header>
				</Menu.Item>
				<Menu.Item position="right">
					<EventFilter
						onSelectCategory={onSelectCategory}
						selectedCategory={selectedCategory}
						categories={categories}
					/>
				</Menu.Item>
				<Menu.Item name="closest">
					<Button
						active={location.pathname === '/events'}
						attached="left"
						color="purple"

						onClick={handleListClick}
					>
						Events
					</Button>
					<Button
						active={location.pathname.includes('/events/calendar')}
						attached="right"
						color="purple"

						onClick={handleCalendarClick}
					>
						Calendar
					</Button>
				</Menu.Item>
			</Menu>
		</Fragment>
	)
}

EventMenu.propTypes = {
	categories: PropTypes.instanceOf(Array),
	handleChange: PropTypes.func,
	history: PropTypes.instanceOf(Object),
	router: PropTypes.instanceOf(Object),
	selectDay: PropTypes.func,
	setFilter: PropTypes.func
}

export default EventMenu
